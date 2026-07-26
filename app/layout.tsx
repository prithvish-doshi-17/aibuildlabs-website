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
  metadataBase: new URL("https://aibuildlabs.dev"),
  title: {
    default: "AI Build Labs — Ideas built into useful products",
    template: "%s — AI Build Labs",
  },
  description:
    "An independent AI product lab turning sharp ideas into focused, useful software.",
  applicationName: "AI Build Labs",
  keywords: ["AI products", "product studio", "software lab", "PatchPilot"],
  openGraph: {
    type: "website",
    url: "https://aibuildlabs.dev",
    siteName: "AI Build Labs",
    title: "AI Build Labs — Ideas built into useful products",
    description:
      "An independent AI product lab turning sharp ideas into focused, useful software.",
    images: [
      {
        url: "/og.png",
        width: 1736,
        height: 907,
        alt: "AI Build Labs — Ideas built into useful products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Build Labs — Ideas built into useful products",
    description:
      "An independent AI product lab turning sharp ideas into focused, useful software.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
