import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./component/NavBar";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keen-Keeper",
  description: "A simple password manager built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html
    data-theme="light"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <NavBar></NavBar>
       <main>
            {children}
       </main>
        </body>
    </html>
  );
}
