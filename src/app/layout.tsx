import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://www.mps.in"),
    title: {
        default: "MPS Digital — Industrial IoT, Web Apps & DevOps",
        template: "%s | MPS Digital",
    },
    description:
        "MPS Digital is a Kanpur-based technology partner delivering Industrial IoT, robust web applications, and DevOps. Nearly three decades of applied engineering.",
    keywords: [
        "MPS Digital",
        "Industrial IoT",
        "IIoT",
        "Web Applications",
        "DevOps",
        "Django",
        "Laravel",
        "CI/CD",
        "Edge Computing",
        "Digital Twins",
    ],
    openGraph: {
        type: "website",
        url: "https://www.mps.in/",
        title: "MPS Digital — Industrial IoT, Web Apps & DevOps",
        description:
            "Technology partner for Industrial IoT, modern web applications, and DevOps. Based in Kanpur, India since 1995.",
        siteName: "MPS Digital",
        images: [
            {
                url: "/og.jpg",
                width: 1200,
                height: 630,
                alt: "MPS Digital — Industrial IoT, Web Apps & DevOps",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "MPS Digital — Industrial IoT, Web Apps & DevOps",
        description:
            "Technology partner for Industrial IoT, modern web applications, and DevOps.",
        images: ["/og.jpg"],
    },
    alternates: {
        canonical: "/",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const orgLdJson = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "MPS Digital",
        url: "https://www.mps.in/",
        logo: "https://www.mps.in/logo.png",
        sameAs: [
            // Add official profiles when available
        ],
        address: {
            "@type": "PostalAddress",
            streetAddress: "254, Block H-1, Pandunagar",
            addressLocality: "Kanpur",
            postalCode: "208005",
            addressCountry: "IN",
        },
        contactPoint: [
            {
                "@type": "ContactPoint",
                telephone: "+91-9005670232",
                contactType: "sales",
                email: "info@mps.in",
                areaServed: "IN",
                availableLanguage: ["en", "hi"],
            },
        ],
        foundingDate: "1995",
    } as const;

    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLdJson) }}
            />
        </head>
        <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}