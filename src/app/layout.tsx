import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import { Providers } from "./providers";
import { Header } from "./header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
            <ConvexClientProvider>
              <Header />
              <div className="container">
                {children}
              </div>
            </ConvexClientProvider>
          </Providers>
        </body>
      </html>
  );
}
