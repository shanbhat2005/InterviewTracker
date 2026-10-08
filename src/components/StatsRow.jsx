import { useQuestion } from '../context/QuestionContext'
import StatCard from './StatCard'

export default function StatsRow() {

  const {questions}= useQuestion()
  const dsaQuestions= questions.filter((q)=>{
    return q.category==='DSA'
  })
  const completedDsaQuestions= dsaQuestions.filter((q)=>  q.status==="Completed")
  const dsaCompletionRate = dsaQuestions.length
    ? Math.round((completedDsaQuestions.length / dsaQuestions.length) * 100)
    : 0
  const interviewQuestions=questions.filter(q=> ['Technical', 'Git'].includes(q.category))
  const completedInterviewQuestions= interviewQuestions.filter(q=> q.status==='Completed')
  const machineCodingRounds=questions.filter(q=> q.category==='Machine Coding')
  const completedMachineCodingRounds=machineCodingRounds.filter(q=> q.status==='Completed')
  const machineCodingStatus=machineCodingRounds.length===0 ||
    machineCodingRounds.every(q=> q.status==='Pending')
    ? 'Not Started'
    : completedMachineCodingRounds.length===machineCodingRounds.length
      ? 'Completed'
      : 'In Progress'
  const machineCodingStatusStyles={
    'Not Started': 'bg-slate-100 text-slate-700',
    'In Progress': 'bg-amber-100 text-amber-800',
    Completed: 'bg-emerald-100 text-emerald-800',
  }
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard label="Total Questions" icon="format_list_bulleted" iconTone="bg-surface-container text-primary">
        <div className="flex items-baseline gap-2">
          <span className="text-data-metric text-on-surface">{questions.length}</span>
          <span className="text-label-sm text-secondary"></span>
        </div>
        {questions.length>=1&&<div className="mt-2 flex items-center gap-1.5 text-label-sm font-medium text-emerald-700">
          <span className="material-symbols-outlined">trending_up</span>
          <span>+  {questions.length-1} this week</span>
        </div>}
      </StatCard>

      <StatCard label="DSA Problems Completed" icon="code" iconTone="bg-indigo-50 text-indigo-700">
        <div className="flex items-baseline gap-2">
          <span className="text-data-metric text-on-surface">{completedDsaQuestions.length}/{dsaQuestions.length}</span>
          <span className="text-label-sm text-secondary">solved</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-label-sm">
          <span className="font-medium text-indigo-700">{dsaCompletionRate}% rate</span>
          <div className="h-1.5 w-20 overflow-hidden rounded-full bg-surface-container">
            <div
              className="h-full rounded-full bg-primary-container"
              style={{ width: `${dsaCompletionRate}%` }}
            />
          </div>
        </div>
      </StatCard>

      <StatCard label="Interview Questions Completed" icon="quiz" iconTone="bg-sky-50 text-sky-700">
        <div className="flex items-baseline gap-2">
          <span className="text-data-metric text-on-surface">{completedInterviewQuestions.length}/ {interviewQuestions.length}</span>
          <span className="text-label-sm text-secondary">solved</span>
        </div>
        <p className="mt-2 text-label-sm text-secondary">Git + Technical domains</p>
      </StatCard>

      <StatCard label="Machine Coding Status" icon="laptop_chromebook" iconTone="bg-amber-50 text-amber-700">
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-label-sm font-medium ${machineCodingStatusStyles[machineCodingStatus]}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {machineCodingStatus}
        </span>
        <p className="mt-2 text-label-sm text-secondary">
          {completedMachineCodingRounds.length} of {machineCodingRounds.length} rounds completed
        </p>
      </StatCard>
    </section>
  )
}