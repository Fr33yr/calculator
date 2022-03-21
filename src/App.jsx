import React,{ Fragment } from 'react';
import './styles/main.css';



const calcBtns = [
  {
    id: "clear",
    text: "AC"
  },
  {
    id: "divide",
    text: "/"
  },
  {
    id: "multipy",
    text: "*"
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
    id: "subtract",
    text: "-"
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
    id: "add",
    text: "+"
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
    id: "zero",
    text: "0"
  },
  {
    id: "decimal",
    text: "."
  },
  {
    id: "equal",
    text: "="
  }
]

function App() {
  return (
    
    <Fragment>
      <div id="calculator">
        <div className="display"></div>
        <div className="btns-container">
          {calcBtns.map((btn) => (
            <Buttons btn={btn} key={btn.id} id={btn.id} />
          ))}
        </div>
      </div> 
    </Fragment>
  );
}

export default App;


export function Buttons({btn}){

  return(
    <Fragment>
        <button className="button" id={btn.id}>
          {btn.text}
        </button>
    </Fragment>
  );
}