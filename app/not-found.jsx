
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const NotFount = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-[100vh] px-4 text-center'>
             <h1 className='text-6xl font-bold gradient-title mb-4'>404 </h1>
             <h2 className='text-2xl font-semibold mb-4'>Page Not Found</h2>
             <p className='text-gray-600 mb-8 '> OPPS! the page you&ops; relookingfor doesn't &apos; exist or has been moved </p>
             <Link href='/'>
             <Button>Return Home </Button> </Link>
        </div>
      
    );
};

export default NotFount;