import type { Metadata } from "next";
import { Geist_Mono, Crimson_Pro } from "next/font/google";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://justfuckingusetanstack.vercel.app"),
  title: "Just Fucking Use TanStack",
  description: "Stop writing boilerplate. Stop fighting your framework. TanStack has you covered.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Just Fucking Use TanStack",
    description: "Stop writing boilerplate. Stop fighting your framework. TanStack has you covered.",
    type: "website",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Just Fucking Use TanStack",
    description: "Stop writing boilerplate. Stop fighting your framework. TanStack has you covered.",
    images: ["/logo.png"],
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
        className={`${crimsonPro.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
