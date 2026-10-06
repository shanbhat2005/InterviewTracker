export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-outline-variant/30 bg-surface-container-lowest shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-container text-on-primary shadow-sm">
            <span className="material-symbols-outlined">terminal</span>
          </div>
          <h1 className="text-headline-sm font-bold tracking-tight text-primary">
            Interview Practice Tracker
          </h1>
        </div>

        <p className="hidden text-label-md text-secondary sm:block">
          Ready to track your time?
        </p>
      </div>
    </header>
  )
}