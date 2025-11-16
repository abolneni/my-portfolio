'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export function Hero() {
  const textContentRef = useRef<HTMLDivElement>(null)
  const imageWrapperRef = useRef<HTMLDivElement>(null)
  const [imageHeight, setImageHeight] = useState<number | undefined>(undefined)

  useEffect(() => {
    const updateImageHeight = () => {
      if (textContentRef.current && imageWrapperRef.current && window.innerWidth >= 768) {
        const textHeight = textContentRef.current.offsetHeight
        setImageHeight(textHeight)
      } else {
        setImageHeight(undefined)
      }
    }

    // Use requestAnimationFrame to ensure measurement happens after render
    requestAnimationFrame(() => {
      updateImageHeight()
    })

    window.addEventListener('resize', updateImageHeight)
    return () => window.removeEventListener('resize', updateImageHeight)
  }, [])

  return (
    <section className="border-b border-border/40 px-4 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
          {/* Left: Photo and Metrics */}
          <div className="md:col-span-2 flex flex-col items-center">
            {/* Image wrapper that will match text content height */}
            <div 
              ref={imageWrapperRef}
              className="w-full"
              style={imageHeight ? { height: `${imageHeight}px` } : undefined}
            >
              <Image
                src="/images/design-mode/Taj_Mahal.jpg"
                alt="Anurag at Taj Mahal"
                width={400}
                height={450}
                className="rounded-lg object-cover shadow-lg w-full h-full"
                priority
              />
            </div>
            {/* Metrics displayed horizontally under image, aligned with buttons */}
            <div className="flex gap-8 md:gap-10 mt-6 justify-center">
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
          </div>

          {/* Right: Text content and buttons */}
          <div className="md:col-span-3 flex flex-col">
            {/* Text content container - image will match this height */}
            <div ref={textContentRef} className="space-y-3">
              <h1 className="text-[1.825rem] sm:text-[2.20rem] md:text-[2.95rem] font-bold tracking-tight text-foreground leading-[1.15] max-w-full">
                Scaling 0-1+ AI products that redefine <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">healthcare operations</span> and patient engagement.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I&#39;m a Founder and Product Manager with 7+ years of experience driving innovation in health tech SaaS. I specialize in scaling novel AI products from idea to growth, leading cross-functional teams while impacting 125+ hospitals and 10M+ patients.
              </p>
            </div>

            {/* Buttons - always horizontal, aligned with metrics */}
            <div className="flex gap-3 mt-6">
              <Link
                href="/featured-work"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 text-sm"
              >
                View My Work
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 font-medium text-foreground transition-colors hover:bg-secondary text-sm"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
