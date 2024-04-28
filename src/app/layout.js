import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Website/header/Header";
import Footer from "@/components/Website/footer/Footer";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Prem Sagar | Full Stack Developer",
  description:
    "I am a Full Stack Developer with 3 years of experience in building web applications using React(NextJS), Node.js, and MongoDB.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
