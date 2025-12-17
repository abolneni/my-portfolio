import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface CaseStudyProps {
  id: string
  company: string
  role: string
  period: string
  description: string
  outcomeMetrics: string[]
  tags: string[]
  featured?: boolean
  logoUrl?: string
}

interface Props {
  study: CaseStudyProps
}

const getTagColor = (tag: string) => {
  const palette = {
    ai: 'bg-sky-500/15 text-sky-800 dark:text-sky-200 border border-sky-500/40',
    build: 'bg-amber-500/15 text-amber-800 dark:text-amber-200 border border-amber-500/40',
    healthInfra: 'bg-teal-500/15 text-teal-800 dark:text-teal-200 border border-teal-500/40',
    engagement: 'bg-cyan-500/15 text-cyan-800 dark:text-cyan-200 border border-cyan-500/40',
    hardware: 'bg-slate-600/15 text-slate-800 dark:text-slate-200 border border-slate-600/40',
    ops: 'bg-orange-500/15 text-orange-800 dark:text-orange-200 border border-orange-500/40',
    enterprise: 'bg-indigo-500/15 text-indigo-800 dark:text-indigo-200 border border-indigo-500/40',
    default: 'bg-muted text-foreground border border-border/60',
  } as const

  const tagToPalette = {
    'AI/LLMs': 'ai',
    'AI/ML': 'ai',
    '0-1': 'build',
    '0-100+': 'build',
    'Startup': 'build',
    'FHIR/EMR': 'healthInfra',
    'MA/M&R': 'healthInfra',
    'Rx Management': 'healthInfra',
    'Ambualtory Products': 'engagement',
    'Ambulatory Products': 'engagement',
    'Omnichannel': 'engagement',
    'Growth Products': 'engagement',
    'IoT/Hardware': 'hardware',
    'Supply Chain': 'ops',
    'Enterprise': 'enterprise',
  } satisfies Record<string, keyof typeof palette>

  // To avoid type errors with string index access, use a type guard:
  const paletteKey = (tagToPalette as Record<string, keyof typeof palette>)[tag] ?? 'default';
  return palette[paletteKey];
}

export function CaseStudyCard({ study }: Props) {
  return (
    <div className="group rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-card/80 hover:shadow-lg hover:shadow-accent/10">
      <div className="space-y-3">
        {/* Header with logo */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            {study.logoUrl && (
              <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-secondary/30 flex items-center justify-center overflow-hidden">
                <Image
                  src={study.logoUrl}
                  alt={`${study.company} logo`}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div className="space-y-1 flex-1">
              <h3 className="text-xl font-bold text-foreground">{study.company}</h3>
              <p className="text-sm font-medium text-accent">{study.role}</p>
              <p className="text-xs text-muted-foreground">{study.period}</p>
            </div>
          </div>
          <ChevronRight className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent mt-1 flex-shrink-0" />
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm">{study.description}</p>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">Outcome Metrics</p>
          <ul className="space-y-1">
            {study.outcomeMetrics.map((metric, idx) => (
              <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                <span className="text-accent">•</span>
                <span>{metric}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
