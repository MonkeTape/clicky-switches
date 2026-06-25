import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";

const apple2Font = localFont({
  src: "./PrintChar21.ttf",
  variable: "--font-apple-2",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ClickyOS",
  description: "Interactive art website for Clicky Switches",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${apple2Font.variable} antialiased flex flex-col w-screen h-screen`}
      >
        <Header />
        <div className="desktop flex-1 plaid p-5 relative">{children}</div>
      </body>
    </html>
  );
}
