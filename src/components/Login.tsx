"use client";

import React, { useState } from "react";

const Login = () => {
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  const handlePhoneInputChange = (e) => {
    setPhone(e.target.value);
  };
  return (
    <div className="border p-2">
      <label>Please enter your phone number</label>
      <input
        className="border p-1 rounded"
        value={phone}
        type="number"
        onChange={handlePhoneInputChange}
      />
    </div>
  );
};

export default Login;
