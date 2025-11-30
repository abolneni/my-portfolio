import { CaseStudyCard } from './case-study-card'

const caseStudies = [
  {
    id: 'getwell',
    company: 'Get Well Network',
    role: 'Senior Product Manager',
    period: '2025 - Present',
    description: 'GetWell is a leading patient engagement SaaS company ($100M+ ARR) that provides a suite of inpatient smart room and outpatient ambulatory solutions. I\'m leading incubation of a 0-1 ambulatory product (TCM) and growth of our maternal health program.',
    outcomeMetrics: [
      'Drove AI-powered patient engagement vision',
      'Improved appointment confirmations',
      'Shaped multi-year roadmap'
    ],
    tags: ['AI/LLMs', '0-1', 'FHIR/EMR', 'Ambualtory Products'],
    featured: true,
    logoUrl: '/images/work/get-well-network.png',
  },
  {
    id: 'televox',
    company: 'TeleVox Healthcare',
    role: 'Senior Product Manager',
    period: '2023 - 2025',
    description: 'TeleVox is a leading US patient engagement platform ($150M+ ARR), serving 100+ hospitals like Stanford Health on the west coast to MGB on the east coast and Mayo Clinic in between. I led our AI product suite from 0-100+, including our EMR-integrated virtual agent (IRIS) and omnichannel SMART offerings (SMS, IVR, Web) with LLM capabilties.',
    outcomeMetrics: [
      'Launched 100+ agents in 3 months (2K DAU)',
      'Increased SMS engagement +15%',
      '+$1M ARR revenue impact'
    ],
    tags: ['AI/LLMs', '0-100+', 'FHIR/EMR', 'Omnichannel'],
    featured: true,
    logoUrl: '/images/work/televox-healthcare.png',
  },
  {
    id: 'medvision',
    company: 'MedVision AI',
    role: 'Co-Founder & CEO',
    period: '2021 - 2023',
    description: 'MedVision is a real-time inventory management system for hospital supply chains. I co-founded and patented this IoT/SaaS solution, while taking it from 0-1.',
    outcomeMetrics: [
      'Patented IoT hardware (#11961613)',
      '$5M+ potential annual savings at scale',
      'Delivered MVP within $50K budget'
    ],
    tags: ['Startup', 'AI/ML', 'IoT/Hardware', 'Supply Chain'],
    featured: true,
    logoUrl: '/images/work/medvision-ai.png',
  },
  {
    id: 'optum',
    company: 'Optum',
    role: 'Product Manager',
    period: '2020 - 2022',
    description: 'Optum is the technology arm of UnitedHealth Group (Fortune 5), serving 40% of the US population. I built and optimized MA/M&R sales tech and pharmacy management products serving millions of beneficiaries across UHC/Optum ecosystem.',
    outcomeMetrics: [
      'Generated $8M ARR impact',
      'Scaled mobile MAU by 2K+',
      'Automated formulary workflows at 100% accuracy'
    ],
    tags: ['Enterprise', 'MA/M&R', 'Rx Management', 'Growth Products'],
    featured: true,
    logoUrl: '/images/work/optum.png',
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
