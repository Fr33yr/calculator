import React,{ Fragment } from "react";
import './styles/main.css'


export default function App(){

  return(
    <Fragment>
      <div id="frame">
        <div className="display">
          <input type="text" className="history" />
          <input type="text" className="current-calc" />
        </div>
        <div className="buttons">
          <button className="span-two">AC</button>
          <button>DEL</button>
          <button>/</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>X</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
          <button>.</button>
          <button className="span-two">0</button>
          <button>%</button>
        </div>
      </div>
    </Fragment>
  );
}