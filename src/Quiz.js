import React from "react";
import Answer from "./Answer";
import { nanoid } from "nanoid";

export default function Quiz(props) {
    const [Answers, setAnswers] = React.useState(props.allAnswers)

    React.useEffect(() => {
        props.setQuizData(prevQuizData => {
            return prevQuizData.map(prevData => {
                    return prevData.id === props.currentQuizId ? {...prevData, all_answer: Answers} : prevData 
                })
        })
    }, [Answers])
    const allAnswers = Answers.map(answerData => {
        return (
            <Answer key={nanoid()} 
            answer={answerData.answer} 
            selected={answerData.selected} 
            answerId={answerData.answerId} 
            toggle={toggle} 
            answerType={answerData.type}
            formSubmited={props.formSubmited}
            />
        )
    })

    function toggle(id) {
        if(!props.formSubmited) {
        setAnswers(prevAnswers => prevAnswers.map(prevAnswer => {
                return prevAnswer.answerId === id 
                ? {...prevAnswer, selected: !prevAnswer.selected}
                : {...prevAnswer, selected: false}
            })
        )
      }
    }
    return (
        <div className="quiz-row">
            <div className="quiz-row--container" >
            <p>{props.question}</p>
             <div className="quiz-choices">
                 {allAnswers}
             </div>
            </div>
            <hr/>
        </div>
    )
}