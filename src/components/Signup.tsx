"use client";

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const SignupComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [enterPassword, setEnterPassword] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };
  return (
    <div className="text-center flex flex-col mx-auto">
      <div>Create your account </div>
      <div className="flex items-center justify-center flex-col mb-10">
        <input
          className="border p-1 rounded w-full"
          value={email}
          placeholder="Email address"
          type="email"
          onChange={handleChange}
        />
        {!enterPassword && (
          <button
            className="bg-emerald-600 text-white mt-2 p-2 rounded-md w-full"
            onClick={() => setEnterPassword(true)}
          >
            Continue
          </button>
        )}
      </div>
      {/* button */}
      <button>Continue</button>

      <div>
        Already have an account?{" "}
        <span className="text-emerald-600">Log in</span>
      </div>
      <div>
        <span>-----------------</span>
        <span>OR</span>
        <span>-----------------</span>
        <hr />
      </div>

      <button className="flex border-gray-300 border mb-2 p-2 rounded-md">
        <FcGoogle className="text-4xl" />
        <span className="text white text-2xl ml-2">Continue with Google</span>
      </button>
      <button className="flex border-gray-300 border mb-2 p-2 rounded-md">
        <FaFacebook className="text-4xl text-blue-500" />
        <span className="text white text-2xl ml-2">Continue with Facebook</span>
      </button>
    </div>
  );
};

export default SignupComponent;
