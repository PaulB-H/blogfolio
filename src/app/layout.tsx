import type { Metadata } from "next";
import "./global.css";

import localFont from "next/font/local";

const Inter = localFont({
  src: "../../public/fonts/inter-Regular.woff2",
  display: "swap",
  weight: "400",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Paul Bernard-Hall",
  description:
    "The 'Blogfolio' (Portfolio + Blog) of Paul Bernard-Hall, JavaScript Game and Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${Inter.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
