import React,{ Fragment } from 'react';
import './styles/main.css';



const calcBtns = [
  {
    id: "zero",
    text: "0"
  },
  {
    id: "one",
    text: "1"
  },
  {
    id: "two",
    text: "2"
  },
  {
    id: "three",
    text: "3"
  },
  {
    id: "four",
    text: "4"
  },
  {
    id: "five",
    text: "5"
  },
  {
    id: "six",
    text: "6"
  },
  {
    id: "seven",
    text: "7"
  },
  {
    id: "eight",
    text: "8"
  },
  {
    id: "nine",
    text: "9"
  },
  {
    id: "decimal",
    text: "."
  },
  {
    id: "add",
    text: "+"
  },
  {
    id: "subtract",
    text: "-"
  },
  {
    id: "multiply",
    text: "*"
  },
  {
    id: "divide",
    text: "/"
  },
  {
    id: "clear",
    text: "AC"
  }
]

function App() {
  return (
    
    <Fragment>
      <h1>Calculator</h1>
      <div className="display"></div>
      <div className="btns-container">
        {calcBtns.map((btn) => (
          <Buttons btn={btn} key={btn.id} id={btn.id} />
        ))}
      </div>
    </Fragment>
  );
}

export default App;


export function Buttons({btn}){

  return(
    <Fragment>
        <div className="button" id={btn.id}>
          <p>{btn.text}</p>
        </div>
    </Fragment>
  );
}