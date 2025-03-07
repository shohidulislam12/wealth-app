import CreatAccountDrower from '@/components/creatAccountDrower';
import { Card, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import React, { Suspense } from 'react';

const Dashbordpage = () => {
    return (
        // dashbord pages 
        <div className='px-5'>

  {/* budges progress */}
   {/* overview */}
   {/* Account Grid  */}
<div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
    <CreatAccountDrower >
<Card className='hover:shadow-md transition-shadow cursor-pointer border-dashed'>
    <CardContent className='flex items-center justify-center text-muted-foreground h-full p-5 flex-col' >
        <Plus className='h-10 w-10 m-2'/>
        <p className='text-sm font-medium'>Add new Account </p>
    </CardContent>
</Card>
    </CreatAccountDrower>
</div>
        </div>
    );
};

export default Dashbordpage;