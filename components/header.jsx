import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import { checkUser } from "@/lib/checkUser";


const Header = async() => {
  await checkUser()
  return (
    <div className="fixed  top-0 w-full bg-white backdrop-blur-md z-40 border-b  ">
      <nav className="max-w-screen-lg p-4 flex items-center justify-between mx-auto">
        <Link href="/">
          {" "}
          <Image
            src={"/bannerlogo.png"}
            alt="logo "
            height={60}
            width={200}
            className="h-12 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center justify-center gap-2">
          <SignedIn>
            <Link className="" href={"/dashbord"}>
              {" "}
              <Button variant="outline">
                <span className="md:flex text-gray-600 hover:text-blue-600 items-center justify-center hidden  gap-2">
                  <LayoutDashboard size={18} />
                  Dashbord
                </span>
              </Button>
            </Link>
            <Link className="" href={"/transaction/creat"}>
              {" "}
              <Button variant="outline">
                <span className="md:flex text-gray-600  hover:text-blue-600 items-center justify-center hidden  gap-2">
                  <PenBox size={18} />
                  Add Transaction
                </span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton redirectUrl="/dashboard" asChild>
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton appearance={{
                elements:{
                    avatarBox:'w-10 h-10'
                }
            }} />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;
