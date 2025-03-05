import {  Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";



const inter=Inter({subsets:['latin']})
export const metadata = {
  title: "Wealth and Finance",
  description: "Calculate and maintain you wealth ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
            <html lang="en">
      <body
        className={` ${inter.className}`}
      >
        {/* header */}
    <Header></Header>
   <main className="min-h-screen max-w-screen-lg mx-auto">
   {children}
   </main>
        {/* Footer */}
        <footer className=" bg-blue-50 py-12">
          <div className="container  text-center  text-gray-600">
          <p className="text-2xl  font-bold item-center">
          calculate your finance and wealth made by shohidul Islam
          </p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
