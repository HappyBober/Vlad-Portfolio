import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FaMoon, FaSun } from "react-icons/fa";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vlad Portfolio",
  description: "Welcome to my page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#DEB887] overflow-y-scroll overflow-x-hidden`}>
        {children}
        <FaSun />
        </body>
    </html>
  );
}
