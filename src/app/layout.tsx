import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bmozi.org"),
  title: {
    default: "BMOZI Community | Meaning, Service, and Human-Centered Technology",
    template: "%s | BMOZI Community",
  },
  description:
    "BMOZI Community is the public branch of BMOZI for spiritual clarity, service, learning paths, and human-centered technology.",
  applicationName: "BMOZI Community",
  authors: [{ name: "BMOZI" }],
  creator: "BMOZI",
  publisher: "BMOZI",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://bmozi.org",
    siteName: "BMOZI Community",
    title: "BMOZI Community",
    description:
      "A community branch for meaning, service, spiritual clarity, and human-centered technology.",
    images: ["/community/hero-path.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "BMOZI Community",
    description:
      "A community branch for meaning, service, spiritual clarity, and human-centered technology.",
    images: ["/community/hero-path.webp"],
  },
  icons: {
    icon: [
      { url: "/brand/bmozi-technical-mark.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0b0f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
