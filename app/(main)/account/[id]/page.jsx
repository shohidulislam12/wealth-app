import { getAccountWithTransaction } from '@/action/account';
import { notFound } from 'next/navigation';
import React from 'react';

const AccountPage =async  ({params}) => {
const accounData=await getAccountWithTransaction(params.id)
if(!accounData){
    notFound()
}
const {transactions,...account}=accounData
    return (
        <div className='space-y-8 flex gap-4 items-end justify-between'>
        <div>
            <h1 className='text-5xl sm:text-6xl font-bold gradient-title capitalize'>{account.name}</h1>
            <p className='text-xs text-muted-foreground capitalize'>{account?.type.charAt(0) + account.type.slice(1).toLowerCase()} Account</p>
        </div>
        <div>
        <div className='text-2xl font-bold '>
    ${parseFloat(account.balance).toFixed(2)}
</div>
<p className='text-sm text-muted-foreground'>{account._count.transactions} {'  '}transactions</p>
        </div>
        {/* chart section */}
        </div>
    );
};

export default AccountPage;