import { Inter, Playfair_Display } from "next/font/google"; // Import the fonts from next/font
import "../styles/globals.css";

// Load fonts using next/font
const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-pf",
});

export const metadata = {
  title: "Groves App Test",
  description: "Created By Ashar Rashid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-inter antialiased bg-custom-gradient`}
      >
        {children}
      </body>
    </html>
  );
}
