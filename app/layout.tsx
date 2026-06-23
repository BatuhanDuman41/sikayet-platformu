import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Şikayet360 - Şikayet ve Müşteri Deneyimi Platformu",
  description:
    "Firmalar hakkında şikayet oluşturun, çözüm sürecini takip edin ve müşteri deneyimlerini inceleyin.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
