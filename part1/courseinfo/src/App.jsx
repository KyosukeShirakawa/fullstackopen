import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"


const App = () => {
  const course = 'Half Stack application development'
  const parts= [
    {part: 'Fundamentals of React', exercise: 10},
    {part: 'Using props to pass data', exercise : 7},
    {part: 'State of a component', exercise : 14},
  ]


  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises1={parts[0].exercise} exercises2={parts[1].exercise} exercises3={parts[2].exercise} />
    </div>
  )
}

export default App