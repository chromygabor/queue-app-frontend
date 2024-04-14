import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyApp",
  description: "MyApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <ThemeModeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
