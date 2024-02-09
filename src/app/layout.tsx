'use client'

// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "AeroAlert",
//   description: "Find any weather forecast at any time",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient()
  return (
    <html lang="en">
      <head>
        <title>AeroAlert</title>
        <meta name='description' content='Find any weather forecast at any time' />
      </head>
      <QueryClientProvider client={queryClient}>
        <body className={inter.className}>{children}</body>
      </QueryClientProvider>
    </html>
  );
}
