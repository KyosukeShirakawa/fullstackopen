import Display from "./Display"

const Statistics = (props) => {
  const {good, neutral, bad} = props

  const getSum = () => good+neutral+bad
  const getAverage = () => {
    if(getSum() ==0) return 0

    return (good-bad) / getSum()
  }
  const getPositive = () => {
    if(getSum() ==0) return 0

    return good/getSum()*100
  }

  if(getSum() == 0) {
    return <p>No feedback given</p>
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Display text='good' value={good}/>
          <Display text='neutral' value={neutral}/>
          <Display text='bad' value={bad}/>
          <Display text='all' value={getSum()} />
          <Display text='average' value={getAverage()} />
          <Display text='positive' value={getPositive()} />
        </tbody>
      </table>
    </>
  )
}

export default Statistics