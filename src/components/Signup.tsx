"use client";

import React, { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa";

const SignupComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="text-center flex flex-col mx-auto">
      <div className="text-3xl font-bold mb-10">Create your account </div>
      <div className="flex items-center justify-center flex-col mb-10">
        <input
          className="border p-1 rounded w-full mb-2"
          value={name}
          placeholder="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-1 rounded w-full mb-2"
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
        {/* {!enterPassword && (
          <button
            className="bg-emerald-600 text-white mt-2 p-2 rounded-md w-full"
            onClick={() => setEnterPassword(true)}
          >
            Continue
          </button>
        )} */}
      </div>
      {/* button */}
      {/* <button>Continue</button> */}
      <button className="bg-emerald-600 text-white mt-2 p-2 rounded-md">
        Register
      </button>

      <div>
        Already have an account?{" "}
        <span className="text-emerald-600">Log in</span>
      </div>
      {/* <div className="flex justify-center items-center">
        <span>-----------------</span>
        <span>OR</span>
        <span>-----------------</span>
        <hr />
      </div> */}

      {/* <button className="flex border-gray-300 border mb-2 p-2 rounded-md items-center justify-center">
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
