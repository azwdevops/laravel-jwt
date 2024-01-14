"use client";
import API from "@/lib/axios";
import { useRouter } from "next/navigation";
import React, { SyntheticEvent, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await API.post("/login", { email, password })
      .then((res) => {
        router.push("/");
      })
      .catch((err) => alert("An error occurred"));
  };

  return (
    <div className="bg-white max-w-[400px] rounded m-auto mt-[10vh]">
      <form className="p-5 space-y-3" onSubmit={handleSubmit}>
        <h3 className="text-xl font-bold text-center text-indigo-800">
          Login Here
        </h3>
        <div className="flex flex-col space-y-2">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            className="border p-2 outline-none rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus={true}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            className="border p-2 outline-none rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoFocus={true}
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-800 px-5 py-2 text-white font-bold rounded-lg hover:opacity-60"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
