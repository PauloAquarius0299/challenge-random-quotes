import type { Metadata } from "next";
import {  Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"], variable: '--font-raleway' });

export const metadata: Metadata = {
  title: "challenge randor quotes",
  description: "Generated random quotes challenge from  devchalleng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} font-sans`}>{children}</body>
    </html>
  );
}
