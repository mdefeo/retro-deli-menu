// /app/layout.tsx
import type { Metadata } from "next";
import WhiteNoise from "./components/WhiteNoise";
import { Inter } from "next/font/google";
import "@/public/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Retro Scolling Menu",
  description: "An 8-bit inspired vertical scroller that can be used for menus, credits, or whatever you would like!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-foreground text-center bg-whitenoise fixed inset-0 flex items-center justify-center`}>
        <WhiteNoise />
        {children}
        <div style={{ height: '100vh' }}></div>
      </body>
    </html>
  );
}
