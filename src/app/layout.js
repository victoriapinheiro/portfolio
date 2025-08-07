import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Portfólio de Victoria Vivian",
  description: "Veja os projetos desenvolvidos por Victoria Vivian aqui",
};

export const viewport = {
  initialScale: 1,
  width: 'device-width'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
