import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Video Betting Challenge",
  description: "Technical interview challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
