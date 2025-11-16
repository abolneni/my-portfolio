import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink } from 'lucide-react'

const newsItems = [
  {
    id: 1,
    title: 'Meet the 2022 Qualcomm Innovator Stipend Program Recipients',
    publication: 'VentureWell',
    date: '2022',
    description: 'MedVision AI selected as Qualcomm Innovator Stipend Program recipient for developing inventory management system using smart shelving and IoT technology.',
    url: 'https://venturewell.org/qualcomm-recipients/',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0UcPf0WBFetCqmWY9Mre2p7Lns23n5.png',
    publicationLogo: 'Qualcomm',
  },
  {
    id: 2,
    title: 'Paste It Forward: Ideas Contest for Budding Entrepreneurs',
    publication: 'Forbes',
    date: 'September 29, 2020',
    description: 'MedVision AI recognized as finalist in Forbes Paste It Forward entrepreneurship contest, celebrating innovative solutions addressing global challenges.',
    url: 'https://www.forbes.com/sites/pastebywetransfer/2020/09/29/paste-it-forward-an-ideas-contest-for-budding-entrepreneurs/',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LWQRewoa7GxU8nLjUX2zbRj8BLAoaf.png',
    publicationLogo: 'Forbes',
  },
  {
    id: 3,
    title: 'Zipcar Calls Student Organizations Nationwide to Enter Students with Drive Competition',
    publication: 'Globe Newswire',
    date: 'September 25, 2019',
    description: 'Recognition of innovation initiatives in student entrepreneurship programs nationwide, highlighting exceptional founders making impact in mobility and sustainability.',
    url: 'https://www.globenewswire.com/news-release/2019/09/25/1920681/29209/en/Zipcar-Calls-Student-Organizations-Nationwide-to-Enter-Students-with-Drive-Competition.html',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OVDUb2lJkVCm2JqMhTaWWX2lO8fxUc.png',
    publicationLogo: 'Zipcar',
  },
  {
    id: 4,
    title: 'Former Gubernatorial Candidate, Public Health Analyst Address Global Health Issues',
    publication: 'Michigan Daily',
    date: 'February 17, 2019',
    description: 'University of Michigan annual Global Health Symposium featuring keynote speakers and student innovators addressing healthcare access and innovation.',
    url: 'https://www.michigandaily.com/news/campus-life/annual-symposium-addresses-global-health-issues/',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wFkjLFAiiEOp50enQ7CvR2sDrkzoBf.png',
    publicationLogo: 'Michigan Daily',
  },
]

export default function InTheNews() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <Navigation />
      <nav className="border-b border-border/40 px-4 py-4">
        <div className="mx-auto max-w-4xl flex justify-center gap-8">
          <a href="/#case-studies" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
            Case Studies
          </a>
          <a href="/#about" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
            About
          </a>
          <a href="/#contact" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
            Contact
          </a>
        </div>
      </nav>

      <section className="border-b border-border/40 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <div className="space-y-2 mb-12">
            <h1 className="text-4xl font-bold text-foreground">In the News</h1>
            <p className="text-lg text-muted-foreground">
              Mentions and features in press, publications, and industry coverage.
            </p>
          </div>

          <div className="space-y-6">
            {newsItems.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-border/60 bg-card/50 hover:bg-card/80 overflow-hidden transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 p-6">
                  {/* Image */}
                  <div className="h-32 w-full sm:h-32 sm:w-40 flex-shrink-0 rounded-lg overflow-hidden bg-secondary/30">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={160}
                      height={120}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-accent">{item.publication}</span>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <div className="flex items-center gap-2 text-accent">
                      <span className="text-sm font-medium">Read Article</span>
                      <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
