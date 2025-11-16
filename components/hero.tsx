import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="border-b border-border/40 px-4 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-start">
          {/* Left: Photo */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <Image
              src="/images/design-mode/Taj_Mahal.jpg"
              alt="Anurag at Taj Mahal"
              width={320}
              height={420}
              className="rounded-lg object-cover shadow-lg"
              priority
            />
          </div>

          {/* Right: Text content and metrics/buttons */}
          <div className="md:col-span-3 space-y-6 flex flex-col justify-start">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Scaling 0-1+ AI products that redefine <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">healthcare operations</span> and patient engagement.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I&#39;m a Founder and Product Manager with 7+ years of experience driving innovation in health tech SaaS. I specialize in scaling novel AI products from idea to growth, leading cross-functional teams while impacting 125+ hospitals and 10M+ patients.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
              {/* Metrics displayed horizontally */}
              <div className="flex gap-6 md:gap-8">
                <div>
                  <div className="text-lg md:text-xl font-bold text-accent">7+</div>
                  <p className="text-xs text-muted-foreground">Years in Product</p>
                </div>
                <div>
                  <div className="text-lg md:text-xl font-bold text-accent">125+</div>
                  <p className="text-xs text-muted-foreground">Hospitals Served</p>
                </div>
                <div>
                  <div className="text-lg md:text-xl font-bold text-accent">10M+</div>
                  <p className="text-xs text-muted-foreground">Patients Impacted</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#featured-work"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 text-sm"
                >
                  View My Work
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 font-medium text-foreground transition-colors hover:bg-secondary text-sm"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
