import QuestionListItem from '../components/QuestionListItem';
import { useQuestion } from '../context/QuestionContext';

// const questions = [
//   {
//     id: 1,
//     title: 'Invert Binary Tree',
//     description: 'Swap the left and right children of every node in a binary tree.',
//     category: 'DSA',
//     difficulty: 'Easy',
//     status: 'Completed',
//   },
//   {
//     id: 2,
//     title: 'Explain Git Rebase',
//     description: 'Describe how rebasing changes the base of a branch.',
//     category: 'Git',
//     difficulty: 'Medium',
//     status: 'In Progress',
//   },
//   {
//     id: 3,
//     title: 'What is a Closure?',
//     description: 'Explain closures and when they are useful in JavaScript.',
//     category: 'Technical',
//     difficulty: 'Medium',
//     status: 'Pending',
//   },
// ];


const QuestionLayout = () => {


  const {questions}= useQuestion()

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <div className="min-w-[720px]">
          <div className="grid grid-cols-[minmax(220px,2fr)_1fr_1fr_1fr_100px] items-center gap-4 border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:px-5">
            <span>Question Title</span>
            <span>Category</span>
            <span>Difficulty</span>
            <span>Status</span>
            <span>Action</span>
          </div>

          {questions.map((question) => (
            <QuestionListItem key={question.id} question={question}  />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionLayout;