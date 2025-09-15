import type { Metadata } from "next";
import { Poppins, Source_Code_Pro, Cascadia_Code } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const source_code_pro = Source_Code_Pro({
  subsets: ["latin"],
  weight: [ "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-source_code_pro",
});

const cascadia_code = Cascadia_Code({
  subsets: ["latin"],
  weight: [ "200", "300", "400", "500", "600", "700"],
  variable: "--font-cascadia_code",
});


export const metadata: Metadata = {
  title: "Design Demo 2",
  description: "Generated Nextjs Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${source_code_pro.variable} ${cascadia_code.variable} antialiased font-poppins`}
      >
        {children}
      </body>
    </html>
  );
}
