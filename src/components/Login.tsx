"use client";

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const LoginComponent = () => {
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");

  const handlePhoneInputChange = (e: any) => {
    setEmail(e.target.value);
  };
  return (
    <div className="border text-center p-2 flex flex-col mx-auto">
      <div className="text-3xl font-bold mb-2">Welcome Back</div>
      <div className="flex items-center justify-center flex-col mb-2">
        <input
          className="border p-1 rounded w-full"
          value={email}
          placeholder="Email address"
          type="email"
          onChange={handlePhoneInputChange}
        />
        <button className="bg-green-500 text-white mt-2 p-2 rounded-md w-full">
          Continue
        </button>
      </div>
      <button className="flex border-gray-300 border mb-2 p-2 rounded-md">
        <FcGoogle className="text-4xl" />
        <span className="text white text-2xl">Login with Google</span>
      </button>
      <button className="flex border-gray-300 border mb-2 p-2 rounded-md">
        <FaFacebook className="text-4xl text-blue-500" />
        <span className="text white text-2xl">Login with Facebook</span>
      </button>
    </div>
  );
};

export default LoginComponent;
