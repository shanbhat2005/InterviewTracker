import { useQuestion } from "../context/QuestionContext";

const statusStyles = {
  Pending: 'bg-amber-50 text-amber-700',
  'In Progress': 'bg-indigo-50 text-indigo-700',
  Completed: 'bg-emerald-50 text-emerald-700',
};

const QuestionListItem = ({ question }) => {
  const {deleteQuestion}= useQuestion()
  return (
    <div className="grid min-w-[720px] grid-cols-[minmax(220px,2fr)_1fr_1fr_1fr_100px] items-center gap-4 border-b border-slate-100 px-4 py-4 last:border-b-0 sm:px-5">
      <div>
        <h3 className="text-sm font-semibold text-slate-900">
          {question.title}
        </h3>
        <p className="mt-1 text-xs text-slate-500">{question.description}</p>
      </div>

      <span className="text-sm text-slate-700">{question.category}</span>

      <span className="text-sm text-slate-700">{question.difficulty}</span>

      <span
        className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[question.status]}`}
      >
        {question.status}
      </span>

      <div className="flex items-center">
        <button
          type="button"
          aria-label={`Delete ${question.title}`}
          onClick={()=> deleteQuestion(question.id)}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-200"
        >
          <span className="material-symbols-outlined text-lg">delete</span>
        </button>
      </div>
    </div>
  );
};

export default QuestionListItem;
