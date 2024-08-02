import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: "Products | Hi Tech Copier Solutions | Best Copier Sales and Services in Hyderabad",
  description: "Discover the best copier sales and services in Hyderabad with Hi Tech Copier Solutions. Explore our range of high-performance copiers from top brands like Canon and Xerox.",
  openGraph: {
    type: "website",
    url: "https://www.hitechcopier.com",
    title: "Products | Hi Tech Copier Solutions",
    description: "Discover the best copier sales and services in Hyderabad with Hi Tech Copier Solutions. Explore our range of high-performance copiers from top brands like Canon and Xerox.",
    siteName: "Hi Tech Copier Solutions",
    images: [
      {
        url: "https://www.hitechcopier.com/assets/Canon-IR-ADV-4225.jpg",
        width: 800,
        height: 600,
        alt: "Canon IR ADV 4225"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@HiTechCopier",
    title: "Products | Hi Tech Copier Solutions",
    description: "Discover the best copier sales and services in Hyderabad with Hi Tech Copier Solutions. Explore our range of high-performance copiers from top brands like Canon and Xerox.",
    images: ["https://www.hitechcopier.com/assets/Canon-IR-ADV-4225.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Discover the best copier sales and services in Hyderabad with Hi Tech Copier Solutions. Explore our range of high-performance copiers from top brands like Canon and Xerox." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hitechcopier.com" />
        <meta property="og:site_name" content="Hi Tech Copier Solutions" />
        <meta property="og:title" content="Products | Hi Tech Copier Solutions" />
        <meta property="og:description" content="Discover the best copier sales and services in Hyderabad with Hi Tech Copier Solutions. Explore our range of high-performance copiers from top brands like Canon and Xerox." />
        <meta property="og:image" content="https://www.hitechcopier.com/assets/Canon-IR-ADV-4225.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@HiTechCopier" />
        <meta property="twitter:title" content="Products | Hi Tech Copier Solutions" />
        <meta property="twitter:description" content="Discover the best copier sales and services in Hyderabad with Hi Tech Copier Solutions. Explore our range of high-performance copiers from top brands like Canon and Xerox." />
        <meta property="twitter:image" content="https://www.hitechcopier.com/assets/Canon-IR-ADV-4225.jpg" />
      </head>
      <body className={cn('min-h-screen bg-dark-300 font-sans antialiased', fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
