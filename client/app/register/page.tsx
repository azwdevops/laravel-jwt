"use client";

import { useRouter } from "next/navigation";
import React, { SyntheticEvent, useState } from "react";
import API from "@/lib/axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await API.post("/register", {
      name,
      email,
      password,
      password_confirmation,
    })
      .then((res) => {
        router.push("/login");
      })
      .catch(() => {
        window.alert("An error occurred");
      });
  };

  return (
    <div className="bg-white max-w-[400px] rounded m-auto mt-[10vh]">
      <form className="p-5 space-y-3" onSubmit={handleSubmit}>
        <h3 className="text-xl font-bold text-center text-indigo-800">
          Register Here
        </h3>
        <div className="flex flex-col space-y-2">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            className="border p-2 outline-none rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoFocus={true}
          />
        </div>
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
        <div className="flex flex-col space-y-2">
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            name="password_confirmation"
            className="border p-2 outline-none rounded-md"
            value={password_confirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
            autoFocus={true}
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-800 px-5 py-2 text-white font-bold rounded-lg hover:opacity-60"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
