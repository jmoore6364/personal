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
  title: "Jason Moore - Senior Software Engineer & Technical Leader",
  description: "AI-forward engineering leader with 25+ years of experience scaling SaaS platforms and building high-performing distributed teams. Leads AI-native development with Cursor and Claude Code, and builds event-driven .NET systems on Azure.",
  keywords: ["Software Engineer", "Technical Leader", "Engineering Manager", ".NET", "Azure", "Cloud Architecture", "Team Leadership", "AI-Native Development", "Agentic Coding", "Claude Code", "Cursor", "SaaS", "Microservices"],
  authors: [{ name: "Jason Moore" }],
  creator: "Jason Moore",
  publisher: "Jason Moore",
  openGraph: {
    title: "Jason Moore - Senior Software Engineer & Technical Leader",
    description: "25+ years of engineering experience. AI-native development, scaling SaaS platforms, cloud architecture, and building high-performing teams.",
    url: "https://jasonmoore.dev",
    siteName: "Jason Moore Portfolio",
    type: "website",
    images: [
      {
        url: "/jason_profile.png",
        width: 264,
        height: 264,
        alt: "Jason Moore - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jason Moore - Senior Software Engineer & Technical Leader",
    description: "25+ years of engineering experience. AI-native development, scaling SaaS platforms, cloud architecture, and building high-performing teams.",
    images: ["/jason_profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/favicon.svg" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
