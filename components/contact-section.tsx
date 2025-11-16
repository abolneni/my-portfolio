import Link from 'next/link'
import { Mail, Linkedin } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="border-b border-border/40 px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground">
            Always open to discussing new opportunities, strategic challenges, or mentoring aspiring PMs.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <a
            href="https://www.linkedin.com/in/anurag-bolneni"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-border/60 bg-card/50 p-6 text-center transition-all hover:border-accent/50 hover:bg-card/80 hover:shadow-lg hover:shadow-accent/10"
          >
            <Linkedin className="mx-auto mb-3 h-6 w-6 text-accent transition-transform group-hover:scale-110" />
            <h3 className="font-semibold text-foreground">LinkedIn</h3>
            <p className="mt-1 text-sm text-muted-foreground">Connect with me</p>
          </a>

          <a
            href="https://x.com/ABolneni"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-border/60 bg-card/50 p-6 text-center transition-all hover:border-accent/50 hover:bg-card/80 hover:shadow-lg hover:shadow-accent/10"
          >
            <svg className="mx-auto mb-3 h-6 w-6 text-accent transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.666-5.829 6.666H2.306l7.644-8.74L.754 2.25h6.696l4.626 6.12L17.77 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <h3 className="font-semibold text-foreground">X</h3>
            <p className="mt-1 text-sm text-muted-foreground">Follow me</p>
          </a>

          <a
            href="mailto:anubolneni@gmail.com"
            className="group rounded-lg border border-border/60 bg-card/50 p-6 text-center transition-all hover:border-accent/50 hover:bg-card/80 hover:shadow-lg hover:shadow-accent/10"
          >
            <Mail className="mx-auto mb-3 h-6 w-6 text-accent transition-transform group-hover:scale-110" />
            <h3 className="font-semibold text-foreground">Email</h3>
            <p className="mt-1 text-sm text-muted-foreground">anubolneni@gmail.com</p>
          </a>
        </div>

        {/* CTA */}
        <div className="rounded-lg border border-accent/30 bg-gradient-to-br from-accent/10 to-accent/5 p-6 text-center">
          <p className="mb-4 text-muted-foreground">
            Interested in discussing product strategy, consulting, or opportunities?
          </p>
          <a
            href="mailto:anubolneni@gmail.com"
            className="inline-flex rounded-lg bg-accent px-6 py-2 font-medium text-accent-foreground transition-all hover:shadow-lg hover:shadow-accent/30"
          >
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  )
}
