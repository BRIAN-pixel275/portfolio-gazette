import type { Metadata } from "next";
import { site } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} (${site.nickname}) | Software & Finance`,
  description: `${site.name} is an Economics and Finance student in Kenya building practical digital products and exploring software development, fintech, and thoughtful design.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
