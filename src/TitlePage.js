import React from "react"

export default function TittlePage(props) {

  const quizCategoriesElement = props.quizCategories.map(category => {
    return (
      <option 
      key={category.id} 
      value={category.id} 
      >
        {category.name}
      </option>
      )
  })


    return (
        <div className="title-pg"> 
            <h1> Quizzical </h1>
            <div className="titlePg--bg-circle1">
            <div className="titlePg--bg-circle1--noColor"></div>
            </div>
            <div className="titlePg--bg-circle2">
            <div className="titlePg--bg-circle2--noColor"></div>
            </div>
            
            <button 
              className="title-pg--button"
              onClick={props.startQuiz}
            > 
              Start Quiz
            </button>
            <div className="tittle-pg--select-category">
            <h3>Choose Category</h3>
            <select id="quiz-categories" onChange={(event) => props.handleCategoryChange(event)} >
              {quizCategoriesElement}
            </select>
            </div>
        </div>
    )
}