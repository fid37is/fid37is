import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fidelis Agba - Portfolio",
  description: "A Versatile Tech Professional",
  openGraph: {
    title: "Fidelis Agba - Portfolio",
    description: "A Versatile Tech Professional",
    url: "https://www.afidelis.online",
    siteName: "Fidelis Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Add your portfolio preview image
        width: 1200,
        height: 630,
        alt: "Your Name Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fidelis Agba - Portfolio",
    description: "A Versatile Tech Professional",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}