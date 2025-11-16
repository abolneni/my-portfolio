export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="border-t border-border/40 pt-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Anurag Bolneni. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Designed & built with Next.js, React, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
