import type { Metadata } from "next";
import { site } from "@/lib/content";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: `${site.name} (${site.nickname}) | Software & Finance`,
    template: `%s | ${site.nickname}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    title: `${site.name} (${site.nickname}) | Software & Finance`,
    description: site.description,
    siteName: `${site.nickname} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} (${site.nickname}) | Software & Finance`,
    description: site.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `const savedTheme = localStorage.getItem("portfolio-theme"); const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches; document.documentElement.dataset.theme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : (prefersDark ? "dark" : "light");`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
