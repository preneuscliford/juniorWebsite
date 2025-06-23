import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SoudurePro - Expert en Soudure Industrielle',
  description: 'Services professionnels de soudure industrielle - TIG, MIG/MAG, Arc, Plasma et plus',
}

/**
 * Layout principal de l'application
 * Définit la structure HTML de base et les métadonnées
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}