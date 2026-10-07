import { useForm } from "react-hook-form";
import { useQuestion } from "../context/QuestionContext";

const AddQuestionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      category: 'DSA',
      difficulty: 'Medium',
      status: 'In Progress',
    },
  });

  const {questions,setQuestions}= useQuestion()

  const handleAdd=(data)=>{
console.log(data);
const values= [...questions,{...data,id:crypto.randomUUID()}]
localStorage.setItem("questions",JSON.stringify(values))
setQuestions(values)
console.log(values);


  }

  return (
    <form
      onSubmit={handleSubmit(handleAdd)}
      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6"
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-50 text-indigo-600">
          +
        </div>

        <h2 className="text-lg font-semibold text-slate-900">
          Add New Question
        </h2>
      </div>

      {/* Fields */}
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
        {/* Title */}
        <div className="lg:col-span-2">
          <label
            htmlFor="title"
            className="mb-1.5 block text-xs font-medium text-slate-700"
          >
            Problem Title
          </label>

          <input
            id="title"
            {...register('title', { required: 'Title is required' })}
            type="text"
            placeholder="e.g. Invert Binary Tree"
            aria-invalid={Boolean(errors.title)}
            aria-describedby={errors.title ? 'title-error' : undefined}
            className={`h-9 w-full rounded-lg border bg-white px-3 text-sm outline-none placeholder:text-slate-400 focus:ring-2 ${
              errors.title
                ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
                : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-100'
            }`}
          />

          {errors.title && (
            <p id="title-error" className="mt-1 text-xs text-red-500">
              {errors.title.message}
            </p>
          )}
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="mb-1.5 block text-xs font-medium text-slate-700"
          >
            Category
          </label>

          <select
            id="category"
            {...register('category')}
            className="h-9 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          >
            <option value="DSA">DSA</option>
            <option value="Git">Git</option>
            <option value="Technical">Technical</option>
            <option value="Machine Coding">Machine Coding</option>
          </select>
        </div>

        {/* Difficulty */}
        <div>
          <label
            htmlFor="difficulty"
            className="mb-1.5 block text-xs font-medium text-slate-700"
          >
            Difficulty
          </label>

          <select
            id="difficulty"
            {...register('difficulty')}
            className="h-9 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label
            htmlFor="status"
            className="mb-1.5 block text-xs font-medium text-slate-700"
          >
            Status
          </label>

          <select
            id="status"
            {...register('status')}
            className="h-9 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Submit */}
        <div className="flex items-end">
          <button
            type="submit"
            className="h-9 w-full rounded-lg bg-indigo-600 px-4 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            ⊕ Add Question
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddQuestionForm;