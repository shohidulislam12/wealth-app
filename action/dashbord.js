"use server";

import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
const serializeTransaction=(obj)=>{
const serialize={...obj};
if(obj.balance){
    serialize.balance=obj.balance.toNumber()
}
if(obj.amount){
    serialize.amount=obj.amount.toNumber()
}
return serialize;
}
export async function creatAccount(data) {
  try {
    const { userId } = await auth();
    if(!userId) throw new Error('Unauthorized ')
        const user=await db.user.findUnique({
    where:{clerkUserId:userId},
})
if(!user){
    throw new Error ('User Not Found')
}
const balanceFloat=parseFloat(data.balance)
if(isNaN(balanceFloat)){
    throw new Error ('Invalid balance amount')
}
const exixtingAccount=await db.account.findMany({
    where:{userId:user.id}
})
const shouldBeDefault=exixtingAccount.length===0?true:data.isDefault;
if(shouldBeDefault){
    await db.account.updateMany({
        where:{userId:user.id,isDefault:true},
        data:{isDefault:false}
    })
}
const account = await db.account.create({
    data: {
      name: data.name,
      type: data.type,
      balance: balanceFloat,
      isDefault: shouldBeDefault,
      userId: user.id, // ✅ Fix: Associate the account with the user
    }
  });
  
const serializedAccount = serializeTransaction(account);
revalidatePath('/dashbord')
return { success: true, data: serializedAccount };

  } catch(err) {
    throw new Error(err.message)
  }
}

export async function getUserAccount(){
    const { userId } = await auth();
    if(!userId) throw new Error('Unauthorized ')
        const user=await db.user.findUnique({
    where:{clerkUserId:userId},
})
if(!user){
    throw new Error ('User Not Found')
}
const accounts=db.account.findMany({
    where:{userId:user.id},
    orderBy:{createdAt:'desc'},
    include:{
        _count:{
            select:{
                transactions:true
            }
        }
    }
})
const serializedAccount = serializeTransaction(accounts); 
return serializedAccount
}
