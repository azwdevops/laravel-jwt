import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Laravel NextJs Auth App",
  description: "Laravel NextJs Auth App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-200">
        <Nav />
        <div className="p-5">{children}</div>
      </body>
    </html>
  );
}
