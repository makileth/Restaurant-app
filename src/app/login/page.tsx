'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
//   const router = useRouter()
//   const {data , status } = useSession()
//  // console.log('Data:', data, 'Status:', status) 

//   if (status === 'loading') {
//     return <p>Loading...</p>
//   }
//   if (status === 'authenticated') {
//     router.push('/')
//   }

  
  return (
    <div className="p-4 min-h-[100vh] flex items-center justify-center">
      {/* BOX */}
      <div className="mt-[5rem] h-full bg-neutral-900 bg-opacity-70 text-white backdrop-blur-2xl shadow-2xl rounded-[10px] flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="https://images.unsplash.com/photo-1585546247643-14e9deb7c998?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" fill className="object-cover"/>
        </div>
        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl text-sunshineYellow">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md hover:bg-white hover:border-white transition duration-300 hover:text-black" onClick={()=> signIn('google')}>
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-blue-100 hover:bg-blue-500 hover:ring-blue-500 transition duration-300 rounded-md">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>
          <p className="text-sm">
            Have a problem?<Link className="underline" href="/contact"> Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
