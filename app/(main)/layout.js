import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div className='max-w-screen-lg mx-auto my-32'> 
            {children}
        </div>
    );
};

export default MainLayout;