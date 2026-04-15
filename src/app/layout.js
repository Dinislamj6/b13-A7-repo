import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import TimelineProvider from "./context/context";
import Providers from "./lib/providers";
import { ToastContainer } from "react-toastify";



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
        <Providers>
          <NavBar></NavBar>
          <main>
            {children}
          </main>
          <Footer></Footer>
             <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
