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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kushagra Sharma",
  url: "https://www.kushagrasharma.space",
  jobTitle: "Full Stack Developer",
  description:
    "Frontend-focused full stack developer from Delhi, India, specializing in Next.js, React, and AI-powered web applications.",
  sameAs: [
    "https://github.com/19Kushagra0",
    "https://www.linkedin.com/in/kushagra-sharma-ks/",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
  email: "hello@kushagrasharma.space",
};

export const metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://www.kushagrasharma.space"
      : "http://localhost:3000"
  ),
  title: "Kushagra Sharma — Full Stack Developer | Next.js & React",
  description:
    "Kushagra Sharma is a full stack developer from Delhi, India, specializing in Next.js, React, and AI-powered web applications. Browse 15+ shipped projects.",
  alternates: {
    canonical: "https://www.kushagrasharma.space",
  },
  openGraph: {
    title: "Kushagra Sharma — Full Stack Developer | Next.js & React",
    description:
      "Kushagra Sharma is a full stack developer from Delhi, India, specializing in Next.js, React, and AI-powered web applications. Browse 15+ shipped projects.",
    url: "https://www.kushagrasharma.space",
    siteName: "Kushagra Sharma Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kushagra Sharma — Full Stack Developer | Next.js & React",
    description:
      "Kushagra Sharma is a full stack developer from Delhi, India, specializing in Next.js, React, and AI-powered web applications. Browse 15+ shipped projects.",
  },
  other: {
    "color-scheme": "light",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <head>
        <meta name="color-scheme" content="light" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
