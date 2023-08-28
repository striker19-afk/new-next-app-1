import { NextFont } from "next/dist/compiled/@next/font";
import "./globals.css";
// import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto: NextFont = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

// export const metadata: Metadata = {
//   title: "APAY Admin",
//   description: "",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
