import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Isamara Resenhas",
  description: "Blog de resenhas",
  icons: {
    icon: "/assets/favicons/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} min-h-screen flex flex-col`}>
        <Header />

        <main className="flex-1">{children}</main>
        {/* footer */}
        <Footer />
        {/* toaster */}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
