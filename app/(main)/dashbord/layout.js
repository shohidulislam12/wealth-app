import { BarLoader } from "react-spinners";
import Dashbordpage from "./page";
import { Suspense } from "react";


const Dashbordlayout = () => {
    return (
        <div className='px-5'>
     <h1 className='text-2xl md:text-6xl gradient-title'>Dashbord</h1>
  {/* deshbord pages */}
  <Suspense fallback={<BarLoader className="mt-4" width={'100%'} color="#9333ea"> </BarLoader>}>
  <Dashbordpage></Dashbordpage>
    </Suspense>

        </div>
    );
};

export default Dashbordlayout;