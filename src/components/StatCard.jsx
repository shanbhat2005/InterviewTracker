export default function StatCard({ label, icon, iconTone, children }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-4 shadow-sm transition-colors hover:border-outline sm:p-5">
      <div className="flex items-start justify-between gap-2">
        <span className="text-label-sm text-secondary">{label}</span>
        <span className={`rounded-lg p-1.5 ${iconTone}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </span>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  )
}