import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://kushagra-s.vercel.app"
      : "http://localhost:3000"
  ),
  title: "Kushagra Sharma - Developer Portfolio",
  description:
    "Frontend focused full stack developer building and integrating web applications.",
  openGraph: {
    title: "Kushagra Sharma - Developer Portfolio",
    description: "Frontend focused full stack developer building and integrating web applications.",
    url: "/",
    siteName: "Kushagra Sharma Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kushagra Sharma - Developer Portfolio",
    description: "Frontend focused full stack developer building and integrating web applications.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
