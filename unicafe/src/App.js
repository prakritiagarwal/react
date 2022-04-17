import React, { useState } from 'react'

const Statistics = (props) => {
  const {good, neutral, bad} = props;
  return (
    <>
      <h2>Stattistics</h2>
      <h3>Good {good}</h3>
      <h3>Neutral {neutral}</h3>
      <h3>Bad {bad}</h3>
      <h3>All {good + bad + neutral}</h3>
      <h3>Average{(good - bad)/(good + bad + neutral)}</h3>
      <h3>Positive{(good * 100)/(good + bad + neutral)}</h3>
    </>   
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
      <button onClick={handleGoodClick}>
        Good
      </button>
      <button onClick={handleNeutralClick}>
        Neutral
      </button>
      <button onClick={handleBadClick}>
        Bad
      </button>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App