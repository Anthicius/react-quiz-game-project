import React, { useState } from 'react'
import Question from './Question'
import Summary from './Summary'
import questions from '../questions'

const Quiz = () => {
    const [questionList, setQuestionList] = useState(questions)
    const [questionIndex, setQuestionIndex] =useState(0)

    const handleSelectAnswer = (answer) => {
            setQuestionIndex((prevValue) => prevValue +1)
    }

  return (
    <div id='quiz'>
        <Question question={questionList[questionIndex]} onSelectAnswer={handleSelectAnswer}/>
    </div>
  )
}

export default Quiz