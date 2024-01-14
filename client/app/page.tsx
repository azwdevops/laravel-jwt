"use client";
import API from "@/lib/axios";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchUser = async () => {
      await API.get("/user")
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {});
    };
    fetchUser();
  }, []);

  return <div>Welcome</div>;
}
