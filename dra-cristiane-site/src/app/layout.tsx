import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dra. Cristiane Pereira Duarte | Psicóloga Clínica e Hospitalar",
  description: "Psicóloga Clínica e Hospitalar com mais de 25 anos de experiência em atendimento psicológico para crianças, adolescentes e adultos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17161658555"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17161658555');
            `
          }}
        />
        {children}
      </body>
    </html>
  );
}
