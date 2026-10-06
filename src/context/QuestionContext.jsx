import { createContext, useContext, useState } from "react";

export const QuestionContext= createContext()

export const QuestionProvider=({children})=>{

    const [questions, setQuestions] = useState(JSON.parse(localStorage.getItem("questions"))||[])
    // console.log(questions);

    const deleteQuestion=(id)=>{
        let newQuestions= questions.filter((q)=>{
            return q.id!==id
        })
        setQuestions(newQuestions)
        localStorage.setItem("questions",JSON.stringify(newQuestions))
    }
    

    return <QuestionContext.Provider value={{questions,setQuestions,deleteQuestion}}>
{children}
    </QuestionContext.Provider>
}

export const useQuestion=()=> useContext(QuestionContext)