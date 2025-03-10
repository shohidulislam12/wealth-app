import { getUserAccount } from '@/action/dashbord';
import CreatAccountDrower from '@/components/creatAccountDrower';
import { Card, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import React, { Suspense } from 'react';
import AccountCard from './_components/account-card';

const Dashbordpage =async () => {
const accounts=await getUserAccount()


    return (
        // dashbord pages 
        <div className='px-5'>

  {/* budges progress */}
   {/* overview */}
   {/* Account Grid  */}
<div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    <CreatAccountDrower >
<Card className='hover:shadow-md transition-shadow cursor-pointer border-dashed'>
    <CardContent className='flex items-center justify-center text-muted-foreground h-full p-5 flex-col' >
        <Plus className='h-10 w-10 m-2'/>
        <p className='text-sm font-medium'>Add new Account </p>
    </CardContent>
</Card>
    </CreatAccountDrower>
    {
        accounts.length>0&&accounts?.map((account)=>{
            return <AccountCard key={account.id } account={account}/>
        })
    }
</div>
        </div>
    );
};

export default Dashbordpage;