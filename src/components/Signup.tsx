"use client";

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import axios from "axios";
import useAuth from "@/hooks/useAuth";

const SignupComponent = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { handleSignupButton } = useAuth();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="text-center flex flex-col mx-auto justify-center align-middle">
      <div className="text-3xl font-bold mb-10">Create your account </div>
      <div className="flex items-center justify-center flex-col mb-10">
        <input
          className="border p-1 rounded w-full mb-1"
          value={state.username}
          placeholder="Username"
          type="text"
          name="username"
          onChange={handleChange}
        />
        <input
          className="border p-1 rounded w-full mb-1"
          value={state.email}
          placeholder="Email address"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <input
          className="border p-1 rounded w-full"
          value={state.password}
          placeholder="Password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <button
          className="bg-emerald-600 text-white mt-2 p-2 rounded-md w-full"
          onClick={() => handleSignupButton(state)}
        >
          Signup
        </button>
      </div>

      {/* <div>
        Already have an account?{" "}
        <span className="text-emerald-600">Log in</span>
      </div>
      <div className="flex justify-center items-center">
        <span>-----------------</span>
        <span>OR</span>
        <span>-----------------</span>
        <hr />
      </div>

      <button className="flex border-gray-300 border mb-2 p-2 rounded-md items-center justify-center">
        <FcGoogle className="text-4xl" />
        <span className="text white ml-2">Continue with Google</span>
      </button>
      <button className="flex border-gray-300 border mb-2 p-2 rounded-md items-center justify-center">
        <FaFacebook className="text-4xl text-blue-500" />
        <span className="text white ml-2">Continue with Facebook</span>
      </button> */}
    </div>
  );
};

export default SignupComponent;
