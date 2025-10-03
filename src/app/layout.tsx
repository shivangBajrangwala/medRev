import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Aside from "./components/aside";
const nunitoSans = Nunito_Sans({
  variable: "--nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medrev",
  description: "Wightloss Telehelp Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} antialiased`}
      >
        {children}
        <div className="page-layout">
          <aside></aside>
          <main>
            <header></header>
          </main>
        </div>
      </body>
    </html>
  );
}
