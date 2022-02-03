import React from "react"

export default function Score(props) {
    const correctAnswers = props.quizData
                             .map(data => {
                               return data.all_answer.filter(data => data.type === "correct_answer" && data.selected)
                              })
                            
    const result = correctAnswers.filter(data => data.length > 0)
    return(
      <h1>Score: {result.length} / {props.quizData.length}</h1>
    )
}