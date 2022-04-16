import React from 'react'

const Header = (props) => {
  return (
    <>
       <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  console.log(props);
  return (
    <>
     <Part value={props.input[0]}/>
     <Part value={props.input[1]}/>
     <Part value={props.input[2]}/>
    </>
  )
}

const Part = (props) => {
  return (
      <p>
        {props.value.name} {props.value.exercises}
      </p>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course}></Header>  
      <Content input={parts}></Content>              
      <Total total={parts[0].exercises+parts[1].exercises+parts[2].exercises}></Total>
    </div>
  )
}

export default App