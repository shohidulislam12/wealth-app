"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
const serializeTransaction=(obj)=>{
const serialize={...obj};
if(obj.balance){
    serialize.balance=obj.balance.toNumber()
}
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
if(!isNaN(balanceFloat)){
    throw new Error ('Invalid balance amount')
}
const exixtingAccount=await db.account.findmany({
    where:{userId:user.id}
})
const shouldBeDefault=exixtingAccount.length===0?true:data.isDefault;
if(shouldBeDefault){
    await db.account.updatemany({
        where:{userId:user.id,isDefault:true},
        data:{isDefault:false}
    })
}
const account=await db.account.creat({
    data:{
        ...data,
        balance:balanceFloat,
        isDefault:shouldBeDefault,
    }
})
const serializeaccount=  serializeTransaction(account )
revalidatePath('/dashbord')
return{success:true}
  } catch {}
}
