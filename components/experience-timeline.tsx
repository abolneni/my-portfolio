import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const mainExperiences = [
  {
    id: 'getwell',
    title: 'Senior Product Manager',
    company: 'Get Well Network',
    period: '2025 - Present',
    duration: '6 months',
    description: 'Leading AI product roadmap and platform strategy for national patient engagement platform.',
  },
  {
    id: 'televox',
    title: 'Senior Product Manager',
    company: 'TeleVox Healthcare',
    period: '2023 - 2025',
    duration: '2 years',
    description: 'Directed 7 cross-functional teams to build omnichannel LLM/RAG-based virtual agent.',
  },
  {
    id: 'medvision',
    title: 'Co-Founder & CEO',
    company: 'MedVision AI',
    period: '2021 - 2023',
    duration: '2 years',
    description: 'Co-founded and patented real-time IoT smart shelving system for hospital supply chains.',
  },
  {
    id: 'optum',
    title: 'Product Manager',
    company: 'Optum',
    period: '2020 - 2022',
    duration: '2 years',
    description: 'Built and optimized MA/M&R sales and pharmacy management products.',
  },
]

const earlyCareerExperiences = [
  {
    id: 'ondeck',
    title: 'Health Fellow',
    company: 'On Deck (ODH1)',
    period: 'Apr - Jun 2021',
  },
  {
    id: 'nha',
    title: 'Hospital Network Management Intern',
    company: 'National Health Authority (NHA)',
    period: 'May - Jun 2019',
  },
]

export function ExperienceTimeline() {
  const [showEarlyCareer, setShowEarlyCareer] = useState(false)

  return (
    <div className="space-y-8">
      {/* Main roles */}
      <div className="space-y-6">
        {mainExperiences.map((exp, idx) => (
          <div key={exp.id} className="flex gap-6">
            {/* Timeline spine with gradient left border */}
            <div className="flex flex-col items-center">
              <div
                className="h-4 w-4 rounded-full bg-primary ring-4 ring-primary/20"
              />
              {idx < mainExperiences.length - 1 && (
                <div className="mt-6 h-12 w-0.5 bg-gradient-to-b from-primary via-accent to-accent" />
              )}
            </div>

            {/* Content */}
            <div className="pb-8 pt-1">
              <div className="flex flex-col gap-1">
                <h4 className="font-bold text-foreground">{exp.title}</h4>
                <p className="text-sm font-medium text-accent">{exp.company}</p>
                <p className="text-xs text-muted-foreground">{exp.period}</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Early career & fellowships section */}
      <div className="space-y-4 border-t border-border/40 pt-6">
        <button
          onClick={() => setShowEarlyCareer(!showEarlyCareer)}
          className="flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
        >
          <ChevronDown
            size={16}
            className={`transition-transform ${showEarlyCareer ? 'rotate-180' : ''}`}
          />
          Early Career & Fellowships
        </button>

        {showEarlyCareer && (
          <div className="ml-6 space-y-3 border-l border-border/40 pl-4">
            {earlyCareerExperiences.map((exp) => (
              <div key={exp.id}>
                <h5 className="text-sm font-medium text-foreground">{exp.title}</h5>
                <p className="text-xs text-accent">{exp.company}</p>
                <p className="text-xs text-muted-foreground">{exp.period}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
