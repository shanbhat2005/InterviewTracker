export default function IntroSection() {
 const now= new Date()
 const date= now.toDateString()

  return (
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
      <div>
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center justify-center rounded-md bg-primary/10 p-1 text-primary">
            <span className="material-symbols-outlined">verified</span>
          </span>
          <h2 className="text-headline-lg tracking-tight text-on-surface">
            Track your weekly interview prep
          </h2>
        </div>
        <p className="mt-0.5 text-body-md text-secondary">
          Maintain deliberate practice velocity across core software engineering competencies.
        </p>
      </div>

      <div className="inline-flex items-center gap-2 self-start rounded-xl border border-outline-variant/50 bg-surface-container-lowest px-3.5 py-1.5 text-label-md text-on-surface shadow-sm md:self-auto">
        <span className="material-symbols-outlined text-secondary">event</span>
        <span>{date}</span>
      </div>
    </div>
  )
}