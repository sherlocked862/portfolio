import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shyam Pipalia — Full-Stack Software Engineer',
  description:
    'Full-Stack Software Engineer with 3+ years across fintech (PwC) and ed-tech (Aakash) — distributed systems, event-driven architectures, air-gapped K8s, disaster recovery, and 500K+ users served.',
  keywords: [
    'Full-Stack Engineer',
    'SDE-2',
    'Java',
    'Spring Boot',
    'Scala',
    'Python',
    'Next.js',
    'AWS',
    'Kafka',
    'Cassandra',
    'Kubernetes',
    'Istio',
    'Disaster Recovery',
    'Air-Gapped Deployments',
    'Distributed Systems',
    'Microservices',
    'Event-Driven Architecture',
  ],
  openGraph: {
    title: 'Shyam Pipalia — Full-Stack Software Engineer',
    description:
      'Full-Stack engineer building event-driven, distributed systems across fintech and ed-tech — from 100+ TPS fraud-screening to platforms serving 250K+ active learners.',
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