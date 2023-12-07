"use client"

import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/Provider'
import Header from '@/components/Header'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
