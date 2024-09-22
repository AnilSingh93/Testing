import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/common/header/page";
import Footer from "./components/common/footer/page";




const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "ADK Instruments",
  description: "ADK Instruments",  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (    
    <html lang="en">       
      <body>      
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
