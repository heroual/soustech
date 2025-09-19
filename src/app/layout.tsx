import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import type { Viewport } from "next";
import { AuthProvider } from "@/context/AuthContext";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SoussTech - Solutions Technologiques Intelligentes",
  description: "Spécialiste en FTTR, Smart Home, Caméras de surveillance, Réseaux & IT. Transformez votre espace en environnement connecté et sécurisé.",
  keywords: "FTTR, Smart Home, Caméras surveillance, Réseaux IT, Domotique, Fibre optique, IoT",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans`}
      >
        <AuthProvider>{children}</AuthProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}