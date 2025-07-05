import { useState } from 'react'
import Statistics from './components/Statistics'
import Button from './components/Button'
import Display from './components/Display'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
      const updatedgood = good+1;
      setGood(updatedgood)
  }
  const handleClickNeutral = () => {
      const updatedneutral = neutral+1;
      setNeutral(updatedneutral)
  }

  const handleClickBad = () => {
      const updatedbad = bad+1;
      setBad(updatedbad)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleClickGood} text='good'/>
      <Button onClick={handleClickNeutral} text='neutral'/>
      <Button onClick={handleClickBad} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad} />      
    </div>
  )
}

export default App