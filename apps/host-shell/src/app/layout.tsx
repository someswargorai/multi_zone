import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@repo/ui-shared";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aura | Premium eCommerce",
  description: "The future of online shopping. Premium products with lightning-fast delivery.",
  icons: {
    icon: "https://img.icons8.com/color/48/shopping-cart--v1.png",
    shortcut: "https://img.icons8.com/color/48/shopping-cart--v1.png",
    apple: "https://img.icons8.com/color/48/shopping-cart--v1.png",
  },
  openGraph: {
    title: "Aura | Premium eCommerce",
    description: "The future of online shopping. Premium products with lightning-fast delivery.",
    url: "https://multi-zone-host-shell.vercel.app",
    siteName: "Aura",
    images: [
      {
        url: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Aura Premium eCommerce",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura | Premium eCommerce",
    description: "The future of online shopping. Premium products with lightning-fast delivery.",
    images: ["https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-zinc-950`}
    >
      <body className="min-h-full flex flex-col text-white">
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
