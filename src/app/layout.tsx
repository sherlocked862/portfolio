import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shyam Pipalia — Full-Stack Software Engineer',
  description:
    'Full-Stack Software Engineer with 3+ years of experience designing and scaling distributed systems, REST APIs, and microservices for fintech and ed-tech platforms.',
  keywords: ['Full-Stack Engineer', 'Java', 'Python', 'Scala', 'Spring Boot', 'AWS', 'Kafka', 'Microservices'],
  openGraph: {
    title: 'Shyam Pipalia — Full-Stack Software Engineer',
    description: 'Full-Stack Software Engineer specializing in distributed systems, microservices, and cloud-native architecture.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-apple-light antialiased">{children}</body>
    </html>
  )
}