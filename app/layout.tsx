import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Providers } from '@/components/providers'
import './globals.css'

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-display',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://damiankumar7.github.io'),
  title: 'Mainak Kumar — Senior Software Engineer',
  description:
    'Senior Software Engineer specializing in Java, Spring Boot, and distributed systems. Ex-PineLabs, Thoughtworks; currently at UKG. Building scalable backend and AI-driven systems.',
  keywords: [
    'Mainak Kumar',
    'Software Engineer',
    'Java',
    'Spring Boot',
    'Distributed Systems',
    'Backend Engineer',
    'AI Engineer',
  ],
  authors: [{ name: 'Mainak Kumar' }],
  openGraph: {
    title: 'Mainak Kumar — Senior Software Engineer',
    description:
      'Java · Spring Boot · Distributed Systems. Ex-PineLabs, Thoughtworks; currently at UKG.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#050505',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`dark ${display.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          {children}
          <div className="grain" aria-hidden="true" />
        </Providers>
      </body>
    </html>
  )
}
