import { Inter } from "next/font/google";
import Footer from "./components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Guarderia 360",
  description: "Guarderia 360 es una institución que ofrece servicios de educación y cuidado para niños y niñas de 1 a 5 años.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        
        {children}

        <Footer />
      </body>
    </html>
  );
}
