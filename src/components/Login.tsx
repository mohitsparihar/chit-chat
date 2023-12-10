"use client";

import { useState } from "react";
import { AuthService } from "@/utils/auth";

const LoginComponent = () => {
  const [loggedInUser, setLoggedInUser] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const login = async (email: string, password: string) => {
    const session = await new AuthService().login(email, password);
    setLoggedInUser(session.$id);
  };

  const logout = async () => {
    await new AuthService().logout();
    setLoggedInUser(null);
  };

  if (loggedInUser) {
    return (
      <div>
        <p>Logged in as {loggedInUser.name}</p>
        <button type="button" onClick={logout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div>
      <p>Not logged in</p>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white mt-2 p-2 rounded-md"
          type="button"
          onClick={() => login(email, password)}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;

// "use client";

// import React, { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa";

// const LoginComponent = () => {
//   const [email, setEmail] = useState<string>("");
//   const [enterPassword, setEnterPassword] = useState<boolean>(false);

//   const handleChange = (e: any) => {
//     setEmail(e.target.value);
//   };
//   return (
//     <div className="text-center flex flex-col mx-auto">
//       <div className="text-3xl font-bold mb-10">Welcome Back</div>
//       <div className="flex items-center justify-center flex-col mb-10">
//         <input
//           className="border p-1 rounded w-full"
//           value={email}
//           placeholder="Email address"
//           type="email"
//           onChange={handleChange}
//         />
//         {!enterPassword && (
//           <button
//             className="bg-emerald-600 text-white mt-2 p-2 rounded-md w-full"
//             onClick={() => setEnterPassword(true)}
//           >
//             Continue
//           </button>
//         )}
//       </div>
//       <button className="flex border-gray-300 border mb-2 p-2 rounded-md items-center justify-center">
//         <FcGoogle className="text-4xl" />
//         <span className="text white ml-2">Login with Google</span>
//       </button>
//       <button className="flex border-gray-300 border mb-2 p-2 rounded-md items-center justify-center">
//         <FaFacebook className="text-4xl text-blue-500" />
//         <span className="text white ml-2">Login with Facebook</span>
//       </button>
//     </div>
//   );
// };

// export default LoginComponent;
