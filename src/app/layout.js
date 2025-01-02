import { Inter, Poppins, Oswald, Quicksand } from "next/font/google";
import localFont from "next/font/local";
import Loader from "@/components/Loader";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: "400",
});
const quick = Quicksand({
  subsets: ["latin"],
  variable: "--font-quick",
  weight: "700",
});
const quickLight = Quicksand({
  subsets: ["latin"],
  variable: "--font-quickLight",
  weight: "400",
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "500",
});
const bella = localFont({
  src: "../../public/fonts/bella.ttf",
  display: "swap",
  variable: "--font-bella",
});
const corir = localFont({
  src: "../../public/fonts/corir.ttf",
  display: "swap",
  variable: "--font-corir",
});
const suiss = localFont({
  src: "../../public/fonts/Suissnord.otf",
  display: "swap",
  variable: "--font-suiss",
});

export const metadata = {
  title: "Suryansh S.",
  description: "FullStack Developer Portfolio",
  openGraph: {
    title: 'Suryansh S.',
    description: 'FullStack Developer Portfolio',
    url: 'https://suryanshsharma.vercel.app/',
    siteName: 'Suryansh S.',
    images: [
      {
        url: 'https://suryanshsharma.vercel.app/me2.jpeg',
        width: 800,
        height: 600,
      },
      {
        url: 'https://suryanshsharma.vercel.app/me2.jpeg',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${quickLight.variable} ${quick.variable} ${inter.variable} ${suiss.variable} ${poppins.variable} ${bella.variable} ${corir.variable} ${oswald.variable}`}
      >
        <Providers>
          <Loader>{children}</Loader>
        </Providers>
      </body>
    </html>
  );
}

// TODO
// Add Move up ANimation globally
// Make Lenis Work
// Add Dark Mode
// Contact Error Handling
