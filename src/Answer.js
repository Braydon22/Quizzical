import React from "react"

export default function Answers(props) {
    function getAnswers() {
        if(props.answerType === "correct_answer" && props.selected) {
            return ("#a0f593")
        }else if(props.answerType === "correct_answer" && !props.selected) {
            return ("#a0f593")            
        }else if(props.selected) {
            return "#f57f7f"
        } else {
            return ""
        }
    }

    const selectingAnswerStyles = {
        backgroundColor: props.selected ? "#bfd9f3" : "",
    }

    const formSubmitedStyle = {
        backgroundColor: getAnswers()
    }

    return  (
        <button 
        style={props.formSubmited ? formSubmitedStyle : selectingAnswerStyles}
        onClick={() => props.toggle(props.answerId)}
        >
            {props.answer}
        </button>
     )
}