import React from 'react';

const Authlayout = ({ children }) => {
  return (
    <div className="flex max-w-screen-lg justify-center items-center pt-12 min-h-screen">
      {children}
    </div>
  );
};

export default Authlayout;
