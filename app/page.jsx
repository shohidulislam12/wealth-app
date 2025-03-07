import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent} from "@/components/ui/card";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import { LayoutDashboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  console.log(statsData)
  return (
    <div className="mt-20">
<HeroSection></HeroSection>
<section className="py-20 bg-blue-50">
  <div className="max-w-screen-lg mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    {statsData.map((statData, index) => (
  <div key={index} className="text-center">
    <div className="text-4xl font-bold text-blue-600 mb-2">{statData?.value}</div>
    <div className="text-gray-600">{statData?.label}</div>
  </div>
))}

    </div>
  </div>
</section>
{/* featured section */}
<section className="py-20">
  <h2 className="text-3xl font-bold text-center mb-12 w-2/3 mx-auto">
  Take control of your finances with our smart and intuitive financial management system.
  </h2>
  <div className="max-w-screen-lg mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 gap-8">
    {featuresData.map((data, index) => (
      <Card key={index} className='p-4 space-y-4 pt-4'>
  <CardContent>
   {data.icon}
   <h3 className="font-semibold">{data.title}</h3>
   <p>{data.description}</p>
  </CardContent>
 
</Card>
))}

    </div>
  </div>
</section>
{/* how works section */}
<section className="py-20 bg-blue-50">
  <h2 className="text-3xl font-bold text-center mb-16 w-2/3 mx-auto">
 How it works
  </h2>
  <div className="max-w-screen-lg mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
    {howItWorksData.map((step, index) => (
    <div>

      <div className="w-16  h-16 bg-blue-100 rounded-full  flex justify-center mx-auto my-auto items-center">
        {step.icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
      <p className="text-gray-600 ">{step.description}</p>
    </div>

))}

    </div>
  </div>
</section>
{/*testimonial section */}
<section className="py-20">
  <h2 className="text-3xl font-bold text-center mb-12 w-2/3 mx-auto">
What our user's say
  </h2>
  <div className="max-w-screen-lg mx-auto px-4">
    <div className="grid grid-cols-1    md:grid-cols-3 gap-8">
    {testimonialsData.map((data, index) => (
      <Card key={index} className='p-4  pt-4'>
  <CardContent>
  
   <div className="flex items-center mb-4">
<Image className="rounded-full" src={data.image} width={40} height={40} alt={data.name}
/>
<div className="ml-4">
    <div className="font-semibold ">{data.name}</div>
    <div className="text-sm text-gray-600 ">{data.role}</div>
   </div>
   </div>

   <p className="text-gray-600">{data.quote}</p>
  
  </CardContent>
 
</Card>
))}

    </div>
  </div>
</section>
{/*testimonial section */}
<section className="py-10 bg-blue-600 ">
<div className="max-w-screen-lg mx-auto px-4 text-center ">
<h2 className="text-3xl font-bold  text-white text-center mb-4 w-2/3 mx-auto">
Effortless Financial Management at Your Fingertips
  </h2>
  <p className="text-blue-100 mb-8 max-w-2xl mx-auto  ">Take control of your finances with our smart and intuitive financial management system. Track expenses, manage budgets, and gain valuable insights to make informed financial decisions—all in one secure platform. </p>
  <Link className="" href={"/dashbord"}>
              {" "}
              <Button className='bg-white  animate-bounce text-blue-600 hover:bg-blue-50 ' variant="outline ">
               
                  Start Free trial 
                
              </Button>
            </Link>
</div>

</section>

    </div>
  );
}
