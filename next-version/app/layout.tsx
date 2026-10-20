import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ghazi Arif — DevSecOps Portfolio",
  description: "Portfolio DevSecOps de Ghazi Arif",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
