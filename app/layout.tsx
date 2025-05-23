import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cartContext";
import { CartModal } from "@/components/cartModal";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "| CFC Kids",
    template: "%s | CFC KIds",
  },
  description: "Shining God's light to the world.",
  openGraph: {
    title: "CFC Kids",
    description: "Shining God's light to the world.",
    siteName: "CFC Kids",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CFC Kids",
    description: "Shining God's light to the world.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        >
          <main className="flex-grow">{children}</main>
          <CartModal />
          <Toaster />
          <Footer />
        </body>
      </html>
    </CartProvider>
  );
}
