import { createContext, useContext, useState } from "react";

export const QuestionContext= createContext()

export const QuestionProvider=({children})=>{

    const [questions, setQuestions] = useState(JSON.parse(localStorage.getItem("questions"))||[])
    const [totalQuestion, setTotalQuestion] = useState([])
    // console.log(dsaQuestions);
const [searchQuestion, setSearchQuestion] = useState(null)  
    const searchText = searchQuestion?.query?.toLowerCase() || ''
    const filteredData = questions.filter((question) =>
        question.title.toLowerCase().includes(searchText) &&
        (!searchQuestion?.category || question.category === searchQuestion.category) &&
        (!searchQuestion?.difficulty || question.difficulty === searchQuestion.difficulty) &&
        (!searchQuestion?.status || question.status === searchQuestion.status)
    )

    // console.log(questions);

    const deleteQuestion=(id)=>{
        let newQuestions= questions.filter((q)=>{
            return q.id!==id
        })
        setQuestions(newQuestions)
        localStorage.setItem("questions",JSON.stringify(newQuestions))
    }

    const updateQuestionStatus=(id,status)=>{
        const newQuestions=questions.map((question)=>
            question.id===id ? {...question,status} : question
        )
        setQuestions(newQuestions)
        localStorage.setItem("questions",JSON.stringify(newQuestions))
    }
    

    return <QuestionContext.Provider value={{questions,setTotalQuestion,filteredData,setQuestions,setSearchQuestion,deleteQuestion,updateQuestionStatus}}>
{children}
    </QuestionContext.Provider>
}

export const useQuestion=()=> useContext(QuestionContext)