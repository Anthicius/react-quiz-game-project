const QuestionTimer = ({timeout}) => {

  setTimeout(()=> {}, timeout)

  return (
    <progress id="question-time"/>
  )
}

export default QuestionTimer