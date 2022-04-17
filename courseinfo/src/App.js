import React from 'react'

const Header = (props) => {
  return (
    <>
       <h1>{props.input.name}</h1>
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
      <p>Number of exercises {props.input[0].exercises + props.input[1].exercises + props.input[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header input={course}></Header>  
      <Content input={course.parts}></Content>              
      <Total input={course.parts}></Total>
    </div>
  )
}

export default App