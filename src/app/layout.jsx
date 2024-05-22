import { Inter } from "next/font/google";
import Header from "@/components/common/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Solbee's Blog",
  description: " Portfolio of Solbee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
