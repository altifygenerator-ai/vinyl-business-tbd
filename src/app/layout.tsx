import "./globals.css";
import { Inter, Archivo } from "next/font/google";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const headingFont = Archivo({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"],
});

export const metadata = {
  title: "Ballard Collective | Vinyl Window Supplier in Northwest Arkansas",
  description:
    "Ballard Collective supplies vinyl windows for contractors, builders, and remodelers across Northwest Arkansas with fast turnaround, competitive pricing, and custom color options.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}