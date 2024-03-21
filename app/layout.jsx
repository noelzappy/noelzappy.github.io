"use client";

import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/scss/style.scss";
import "aos/dist/aos.css";

import { ThemeProvider } from "next-themes";
import ThemeSwitch from "@/components/switch/ThemeSwitch";

import { Mulish, Montserrat, Poppins } from "next/font/google";
import AOSInit from "@/components/AOSInit";

const MulishFonts = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-mulish",
});
const MontserratFonts = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-montserrat",
});
const PoppinsFonts = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-poppins",
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${MulishFonts.variable} ${MontserratFonts.variable}  ${PoppinsFonts.variable}  `}
      >
        <AOSInit />
        <div className="tokyo_tm_all_wrap">
          <ThemeProvider attribute="class">
            <ThemeSwitch />
            {/* End themeSwicher */}
            {children}
            {/* Main next component pageprops */}
          </ThemeProvider>

          <ToastContainer />
        </div>
      </body>
    </html>
  );
}
