import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="h-[7vh] bg-indigo-700 text-white flex items-center p-5">
      <h1 className="flex-[0.2] text-2xl font-bold">Laravel NextJs</h1>
      <ul className="flex-[0.8] flex space-x-5 justify-end font-bold">
        <li>
          <Link href="/register">Register</Link>{" "}
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
