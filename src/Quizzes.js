import React from "react"
import Quiz from "./Quiz"
import Score from "./Score"
import { nanoid } from 'nanoid'

export default function Quizzes(props) {
    const [quizData, setQuizData] = React.useState([])
    const [formSubmited, setFormSubmited] = React.useState(false)

    React.useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=5&category=${props.currentCategory}`)
          .then(res => res.json())
          .then(data => setQuizData(data.results.map(quiz => {
            
            const correctAnswer = {
              answerId: nanoid(),
              answer: decodeStr(quiz.correct_answer),
              type: "correct_answer",
              selected: false
            }

            const incorrectAnswers = quiz.incorrect_answers.map(data => {
               return {
                 answerId: nanoid(),
                 answer: decodeStr(data),
                 type: "incorrect_answers",
                 selected: false
               }
             })

            return {
              id: nanoid(),
              question: decodeStr(quiz.question),
              incorrect_answers: incorrectAnswers,
              correct_answer: correctAnswer,
              all_answers: shuffleArray(incorrectAnswers.concat(correctAnswer))
            }
          })))
    }, [])

    function decodeStr(str) {
      const textArea = document.createElement('textArea')
      textArea.innerHTML = str
      return textArea.value
    }

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }

      return array
    }

    function handleSubmit(event) {
      event.preventDefault()
      setFormSubmited(true)
    }


    const quizElement = quizData.map(data => <Quiz key={data.id} question={data.question} allAnswers={data.all_answers} formSubmited={formSubmited} setQuizData={setQuizData} currentQuizId={data.id} />)

    return (
        <div className="quiz-page"> 
            <div className="quizPg--bg-circle1">
             <div className="quizPg--bg-circle1--noColor"></div>
            </div>
            <div className="quizPg--bg-circle2">
             <div className="quizPg--bg-circle2--noColor"></div>
            </div>

          <form onSubmit={handleSubmit}>
             <div className="quiz-board">
               {quizData.length > 0 && quizElement}
             </div> 
             <div className="form-buttons" >
               {formSubmited  
                ? <div>
                    <button className="retry-btn" onClick={() => window.location.reload(false)} >Try Again</button> 
                    <Score quizData={quizData} />
                  </div>

                : <button className="checkAnswer-btn">Check Answer</button> 
               }
      
             </div>
          </form>
        </div>
    )
}