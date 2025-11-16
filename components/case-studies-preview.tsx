import { CaseStudyCard } from './case-study-card'

const caseStudies = [
  {
    id: 'getwell',
    company: 'Get Well Network',
    role: 'Senior Product Manager',
    period: '2025 - Present',
    description: 'Leading AI product roadmap and platform strategy for national patient engagement platform across SMS, web, and behavioral health workflows.',
    outcomeMetrics: [
      'Drove AI-powered patient engagement vision',
      'Improved appointment confirmations',
      'Shaped multi-year roadmap'
    ],
    tags: ['Healthcare', 'SaaS', 'AI', 'Platform Strategy'],
    featured: true,
    logoUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-urHNmZ7cajuD6Y0v8yYQyKoEcpLDHV.png',
  },
  {
    id: 'televox',
    company: 'TeleVox Healthcare',
    role: 'Senior Product Manager',
    period: '2023 - 2025',
    description: 'Directed 7 cross-functional teams to build an omnichannel (SMS, IVR, web) LLM/RAG-based virtual agent integrated with Epic FHIR and AWS Lex.',
    outcomeMetrics: [
      'Launched 100+ agents in 3 months (2K DAU)',
      'Increased SMS engagement +15%',
      '+$1M ARR revenue impact'
    ],
    tags: ['AI/LLM', 'Healthcare', 'Platform', 'Scale', 'SaaS'],
    featured: true,
    logoUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ih0VJNptWfu7T0BggDFWJ9FAca3por.png',
  },
  {
    id: 'medvision',
    company: 'MedVision AI',
    role: 'Co-Founder & CEO',
    period: '2021 - 2023',
    description: 'Co-founded and patented a real-time IoT smart shelving system for hospital supply chains, raising $110K non-dilutive funding with AWS architecture.',
    outcomeMetrics: [
      'Patented IoT hardware (#11961613)',
      '$5M+ potential annual savings at scale',
      'Delivered MVP within $50K budget'
    ],
    tags: ['Startup', 'IoT', 'Hardware', 'Healthcare', 'Supply Chain'],
    featured: true,
    logoUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iksFmdJgreRTbcacrOJHK3zO7C1Y1U.png',
  },
  {
    id: 'optum',
    company: 'Optum',
    role: 'Product Manager',
    period: '2020 - 2022',
    description: 'Built and optimized MA/M&R sales and pharmacy management products serving millions of beneficiaries across UHC/Optum ecosystem.',
    outcomeMetrics: [
      'Generated $8M ARR impact',
      'Scaled mobile MAU by 2K+',
      'Automated formulary workflows at 100% accuracy'
    ],
    tags: ['Enterprise', 'Healthcare', 'Scale', 'Data'],
    featured: true,
    logoUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PSa7cQYDJhtSDqUeJza6tILwAlqMRF.png',
  },
]

export function CaseStudiesPreview() {
  return (
    <section id="featured-work" className="border-b border-border/40 px-4 py-10 sm:py-12">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Featured Work
          </h2>
          <p className="text-base text-muted-foreground">
            A selection of my most impactful product leadership experiences.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-1">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  )
}
