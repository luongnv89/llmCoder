import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

let title = "Ollama Coder – AI Code Generator";
let description = "Welcome to Ollama Coder, the AI code generator that helps you build your next app.";
let url = "https://ollama-coder.ai/";
let ogimage = "ollama.svg";
let sitename = "ollama-coder.ai";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: "favicon.ico",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </html>
  );
}
