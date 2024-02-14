import { Inter, Tangerine } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const tangerine = Tangerine({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Happy Valentine's Day",
  description: "Valentine message to my one and only Dudu. From your love Nosa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={tangerine.className}>{children}</body>
    </html>
  );
}
