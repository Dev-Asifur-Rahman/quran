import { Roboto, Amiri, Scheherazade_New } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const scheherazade = Scheherazade_New({
  variable: "--font-scheherazade",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Quran App",
  description: "Holy Quran reading application",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${amiri.variable} ${scheherazade.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
