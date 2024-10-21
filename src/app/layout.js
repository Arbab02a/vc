import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
import Navbar from '/src/components/Navbar.jsx'
import Footer from '/src/components/Footer.jsx'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Virtual Crafters",
  description: "Virtual Crafters - Providing the right solutions to you!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
     <Script async src="https://www.googletagmanager.com/gtag/js?id=G-9509QDW1XH"></Script>
<Script id='google-analytics'>
 { `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9509QDW1XH');`
 }
</Script>
     </head>
      <body className={inter.className}>
      <Navbar/>
        {children}
        <Footer/>
        {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
        </body>
    </html>
  );
}
