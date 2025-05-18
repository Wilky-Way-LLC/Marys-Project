import '../styles/globals.css'
import type { Metadata } from 'next'
import { Header } from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import ScrollRestoration from '../components/ScrollRestoration'

export const metadata: Metadata = {
  title: "We're All Mad Here Therapy",
  description: "Home | We're All Mad Here Therapy",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-light-gray text-plum">
        <ScrollRestoration />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Banner />
        <Footer />
      </body>
    </html>
  )
}