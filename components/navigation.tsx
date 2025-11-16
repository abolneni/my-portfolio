'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const links = [
    { href: '/about', label: 'About', sectionId: 'about' },
    { href: '/featured-work', label: 'Featured Work', sectionId: 'featured-work' },
    { href: '/in-the-news', label: 'In the News', sectionId: null },
    { href: '/contact', label: 'Contact', sectionId: 'contact' },
  ]

  // Handle scroll to section on page load or navigation
  useEffect(() => {
    const sectionRoutes = ['/about', '/featured-work', '/contact']
    
    if (pathname === '/') {
      // Check if there's a hash in URL (for backward compatibility)
      const hash = window.location.hash.substring(1)
      if (hash && ['about', 'featured-work', 'contact'].includes(hash)) {
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            // Update URL to clean path
            window.history.replaceState(null, '', `/${hash}`)
          }
        }, 300)
      }
    } else if (sectionRoutes.includes(pathname)) {
      // Section route - scroll to section (page already renders home content)
      const sectionId = pathname.substring(1) // Remove leading '/'
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 300)
    }
  }, [pathname])

  const handleSectionClick = (href: string, sectionId: string | null) => {
    setIsOpen(false)
    
    if (!sectionId) {
      // Not a section link, just navigate
      router.push(href)
      return
    }
    
    // Navigate to section route (which renders home page content)
    router.push(href)
    // The useEffect will handle scrolling when the page loads
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-bold text-foreground transition-colors hover:text-accent">
            Anurag
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden gap-8 md:flex">
            {links.map((link) => {
              if (link.sectionId) {
                // Section link - handle navigation and scrolling with clean URL
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleSectionClick(link.href, link.sectionId)
                    }}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                )
              } else {
                // Full page route - use Link
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                )
              }
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="flex flex-col gap-4 border-t border-border py-4 md:hidden">
            {links.map((link) => {
              if (link.sectionId) {
                // Section link - handle navigation and scrolling with clean URL
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleSectionClick(link.href, link.sectionId)
                    }}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                )
              } else {
                // Full page route - use Link
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                )
              }
            })}
          </div>
        )}
      </div>
    </nav>
  )
}
