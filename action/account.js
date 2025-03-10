'use server'
import { auth } from "@clerk/nextjs/server";  // Correct import
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

// Serialize transaction amounts to ensure they are numbers
const serializeTransaction = (obj) => {
  const serialize = { ...obj };
  if (obj.balance) {
    serialize.balance = obj.balance.toNumber();
  }
  if (obj.amount) {
    serialize.amount = obj.amount.toNumber();
  }
  return serialize;
};

export async function updateDefaultAccount(accountId) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error('Unauthorized');
    
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) {
      throw new Error('User Not Found');
    }

    // Set all existing default accounts to false
    await db.account.updateMany({
      where: { userId: user.id, isDefault: true },
      data: { isDefault: false },
    });

    // Set the selected account as default
    const account = await db.account.update({
      where: {
        id: accountId,
        userId: user.id,
      },
      data: { isDefault: true },
    });

   revalidatePath('/dashbord')
    return { success: true, data: serializeTransaction(account) };

  } catch (error) {
    return { success: false, error: error?.message || 'An unknown error occurred' };
  }
}

export  const getAccountWithTransaction=async(accountId)=>{
    const { userId } = await auth();
    if (!userId) throw new Error('Unauthorized');
    
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) {
      throw new Error('User Not Found');
    }
    const account=await db.account.findUnique({
        where:{id:accountId,userId:user.id},
        include:{
            transactions:{
                orderBy:{date:'desc'}
            },
            _count:{
                select:{transactions:true}
            }
        }
    })

    if(!account){
        return null 
    }
    return {
        ...serializeTransaction(account),
        transactions:account.transactions.map(serializeTransaction)
    }
}
