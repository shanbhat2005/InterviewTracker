import { useForm } from "react-hook-form";
import { useQuestion } from "../context/QuestionContext";

const SearchQuestionForm = () => {


const {register,reset,handleSubmit}=useForm( 
)
const {setSearchQuestion}= useQuestion()

const handleSearch=(data)=>{
setSearchQuestion(data)

}

const handleClearFilters = () => {
  reset()
  setSearchQuestion(null)
}
  return (
    <form 
      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6"
      onSubmit={handleSubmit(handleSearch) }
    >
      <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-50 text-indigo-600">
          <span className="material-symbols-outlined text-base">search</span>
        </div>

        <h2 className="text-lg font-semibold text-slate-900">
          Search Questions
        </h2>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <label
            htmlFor="question-search"
            className="mb-1.5 block text-xs font-medium text-slate-700"
          >
            Search by title
          </label>
          <div className="relative">
            <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-base text-slate-400">
              search
            </span>
            <input {...register("query")}
              id="question-search"
              name="query"
              type="search"
              placeholder="e.g. Invert Binary Tree"
              className="h-9 w-full rounded-lg border border-slate-200 pl-9 pr-3 text-sm outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="search-category"
            className="mb-1.5 block text-xs font-medium text-slate-700"
          >
            Category
          </label>
          <select
          {...register("category")}
            id="search-category"
            name="category"
            defaultValue=""
            className="h-9 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          >
            <option value="">All categories</option>
            <option value="DSA">DSA</option>
            <option value="Git">Git</option>
            <option value="Technical">Technical</option>
            <option value="Machine Coding">Machine Coding</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="search-difficulty"
            className="mb-1.5 block text-xs font-medium text-slate-700"
          >
            Difficulty
          </label>
          <select
          {...register("difficulty")}
            id="search-difficulty"
            name="difficulty"
            defaultValue=""
            className="h-9 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          >
            <option value="">All difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="search-status"
            className="mb-1.5 block text-xs font-medium text-slate-700"
          >
            Status
          </label>
          <select
          {...register("status")}
            id="search-status"
            name="status"
            defaultValue=""
            className="h-9 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          >
            <option value="">All statuses</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="flex items-end gap-2 md:col-span-2 lg:col-span-5">
          <button
            type="submit"
            className="h-9 rounded-lg bg-indigo-600 px-4 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            Search Questions
          </button>
          <button
            type="button"
            onClick={handleClearFilters}
            className="h-9 rounded-lg border border-slate-200 px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          >
            Clear filters
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchQuestionForm;
