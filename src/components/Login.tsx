"use client";

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

const LoginComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { handleLoginButton } = useAuth();

  return (
    <div className="text-center flex flex-col mx-auto justify-center align-middle">
      <div className="text-3xl font-bold mb-10">Welcome Back</div>
      <div className="flex items-center justify-center flex-col mb-10">
        <input
          className="border p-1 rounded w-full mb-1"
          value={email}
          placeholder="Email address"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-1 rounded w-full"
          value={password}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-emerald-600 text-white mt-2 p-2 rounded-md w-full"
          onClick={() => handleLoginButton({ email, password })}
        >
          Login
        </button>
      </div>
      {/* <button className="flex border-gray-300 border mb-2 p-2 rounded-md items-center justify-center">
        <FcGoogle className="text-4xl" />
        <span className="text white ml-2">Login with Google</span>
      </button>
      <button className="flex border-gray-300 border mb-2 p-2 rounded-md items-center justify-center">
        <FaFacebook className="text-4xl text-blue-500" />
        <span className="text white ml-2">Login with Facebook</span>
      </button> */}
    </div>
  );
};

export default LoginComponent;
