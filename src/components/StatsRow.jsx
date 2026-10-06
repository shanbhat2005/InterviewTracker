import StatCard from './StatCard'

export default function StatsRow() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard label="Total Questions" icon="format_list_bulleted" iconTone="bg-surface-container text-primary">
        <div className="flex items-baseline gap-2">
          <span className="text-data-metric text-on-surface">18</span>
          <span className="text-label-sm text-secondary">tracked</span>
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-label-sm font-medium text-emerald-700">
          <span className="material-symbols-outlined">trending_up</span>
          <span>+3 this week</span>
        </div>
      </StatCard>

      <StatCard label="DSA Problems Completed" icon="code" iconTone="bg-indigo-50 text-indigo-700">
        <div className="flex items-baseline gap-2">
          <span className="text-data-metric text-on-surface">7 / 10</span>
          <span className="text-label-sm text-secondary">solved</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-label-sm">
          <span className="font-medium text-indigo-700">70% rate</span>
          <div className="h-1.5 w-20 overflow-hidden rounded-full bg-surface-container">
            <div className="h-full rounded-full bg-primary-container" style={{ width: '70%' }} />
          </div>
        </div>
      </StatCard>

      <StatCard label="Interview Questions Completed" icon="quiz" iconTone="bg-sky-50 text-sky-700">
        <div className="flex items-baseline gap-2">
          <span className="text-data-metric text-on-surface">5 / 8</span>
          <span className="text-label-sm text-secondary">solved</span>
        </div>
        <p className="mt-2 text-label-sm text-secondary">Git + Technical domains</p>
      </StatCard>

      <StatCard label="Machine Coding Status" icon="laptop_chromebook" iconTone="bg-amber-50 text-amber-700">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-1 text-label-sm font-medium text-amber-800">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          In Progress
        </span>
        <p className="mt-2 text-label-sm text-secondary">1 of 3 rounds completed</p>
      </StatCard>
    </section>
  )
}