import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Febrillet Does It All Services LLC | Handyman & Remodeling",
  description: "Licensed, Insured, and Reliable general home improvement, remodeling, drywall, and repairs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-slate-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}