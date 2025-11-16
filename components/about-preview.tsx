import { ExperienceTimeline } from './experience-timeline'

export function AboutPreview() {
  return (
    <section id="about" className="border-b border-border/40 px-4 py-10 sm:py-12">
      <div className="mx-auto max-w-4xl space-y-6">
        <ExperienceTimeline />
      </div>
    </section>
  )
}
