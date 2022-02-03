import React from "react"
import TittlePage from "./TitlePage"
import Quizzes from "./Quizzes";

export default function App() {
  const [onTittlePg, setOnTittlePg] = React.useState(true)
  const [quizCategories, setQuizCategories] = React.useState([])
  const [selectedCategory, setSelectedCategory] = React.useState(9) // default category, general knowledge

  React.useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then(res => res.json())
      .then(data => setQuizCategories(data.trivia_categories))

  }, [])

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value)
  }


  return (
    <div className="App">
      {onTittlePg 
      ? <TittlePage 
          startQuiz={()=> setOnTittlePg(false)} 
          quizCategories={quizCategories} 
          handleCategoryChange={handleCategoryChange} 
        /> 
      : <Quizzes currentCategory={selectedCategory} /> }
    </div>
  );
}

