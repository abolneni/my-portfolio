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
  const colorMap: Record<string, string> = {
    'AI': 'bg-indigo-500/30 text-indigo-600 dark:text-indigo-400 border border-indigo-500/60',
    'LLM': 'bg-indigo-500/30 text-indigo-600 dark:text-indigo-400 border border-indigo-500/60',
    'AI/LLM': 'bg-indigo-500/30 text-indigo-600 dark:text-indigo-400 border border-indigo-500/60',
    'Healthcare': 'bg-teal-500/30 text-teal-700 dark:text-teal-300 border border-teal-500/60',
    'SaaS': 'bg-cyan-500/30 text-cyan-700 dark:text-cyan-300 border border-cyan-500/60',
    'Platform': 'bg-cyan-500/30 text-cyan-700 dark:text-cyan-300 border border-cyan-500/60',
    'Platform Strategy': 'bg-cyan-500/30 text-cyan-700 dark:text-cyan-300 border border-cyan-500/60',
    'Scale': 'bg-blue-500/30 text-blue-700 dark:text-blue-300 border border-blue-500/60',
    'Enterprise': 'bg-blue-500/30 text-blue-700 dark:text-blue-300 border border-blue-500/60',
    'Startup': 'bg-amber-500/30 text-amber-700 dark:text-amber-300 border border-amber-500/60',
    'IoT': 'bg-amber-500/30 text-amber-700 dark:text-amber-300 border border-amber-500/60',
    'Hardware': 'bg-amber-500/30 text-amber-700 dark:text-amber-300 border border-amber-500/60',
    'Supply Chain': 'bg-amber-500/30 text-amber-700 dark:text-amber-300 border border-amber-500/60',
    'Data': 'bg-slate-600/30 text-slate-700 dark:text-slate-300 border border-slate-500/60',
  }
  return colorMap[tag] || 'bg-slate-500/30 text-slate-700 dark:text-slate-300 border border-slate-500/60'
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
                  src={study.logoUrl || "/placeholder.svg"}
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
