"use client";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-blue-300 px-1">
      <div className="logo p-2">Chit-Chat</div>
      <div>
        <button className="bg-blue-500 text-white p-2 border-2">Login</button>
        <button className="bg-emerald-600 text-white p-2 border-2">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Navbar;
