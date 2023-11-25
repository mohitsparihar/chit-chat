import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between pt-1">
      <div className="logo">Logo</div>
      <div>
        <button className="login-button border mr-1 p-1">Login</button>
        <button className="signup-button border p-1">Signup</button>
      </div>
    </div>
  );
};

export default Navbar;
