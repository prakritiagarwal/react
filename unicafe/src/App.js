import React, { useState } from 'react'

const Statistics = (props) => {
  const {good, neutral, bad} = props;
  let total = good + neutral + bad;
  if(total === 0)
  {
    return (
      <>
        <h2>Stattistics</h2>
        <h3>No feedback given</h3>
      </>
    )
  }
  else
  {
    return (
      <>
        <h2>Stattistics</h2>
        <StatisticLine text='Good' value={good}/>
        <StatisticLine text='Neutral' value={neutral}/>
        <StatisticLine text='Bad' value={bad}/>
        <StatisticLine text='All' value={total}/>
        <StatisticLine text='Average' value={(good - bad)/total}/>
        <StatisticLine text='Positive' value={(good * 100)/total}/>        
      </>   
    )
  }  
}

const StatisticLine = (props) => {
  const{text, value} = props;
  return(
    <h3>{text} {value}</h3>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {    
    setGood(good + 1);
  }

  const handleNeutralClick = () => {    
    setNeutral(neutral + 1);
  }

  const handleBadClick = () => {    
    setBad(bad + 1);
  }

  return (
    <div>      
      <Button onClick={handleGoodClick} text='Good'/>
      <Button onClick={handleNeutralClick} text='Neutral'/>
      <Button onClick={handleBadClick} text='Bad'/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App