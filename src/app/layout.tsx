import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./styles/globals.css";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyTube",
  description: "Welcome to MyTube - an open source YouTube alternative !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
