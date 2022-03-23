import React,{ Fragment, useReducer } from "react";
import './styles/main.css'

import { Digits } from "./components/Digits";
import { Operators } from "./components/Operators";

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}


function reducer(state, { type, payload }) {
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentCalc: `${state.currentCalc || ""}${payload.digit}`  
      }
  }

}

export default function App(){

  const [{ currentCalc, history, operation }, dispatch] = useReducer(reducer, {})


  return(
    <Fragment>
      <div id="frame">
        <div className="display">
          <div className="history">{history} {operation}</div>
          <div className="current-calc">{currentCalc}</div>
        </div>
        <div className="buttons">
          <button className="span-two">AC</button>
          <button>DEL</button>
          <button>/</button>
          <Digits digit={7} dispatch={dispatch}/>
          <Digits digit={8} dispatch={dispatch}/>
          <Digits digit={9} dispatch={dispatch}/>
          <Operators operation={'*'} dispatch={dispatch}/>
          <Digits digit={4} dispatch={dispatch}/>
          <Digits digit={5} dispatch={dispatch}/>
          <Digits digit={6} dispatch={dispatch}/>
          <Operators operation={'-'} dispatch={dispatch}/>
          <Digits digit={1} dispatch={dispatch}/>
          <Digits digit={2} dispatch={dispatch}/>
          <Digits digit={3} dispatch={dispatch}/>
          <Operators operation={'+'} dispatch={dispatch}/>
          <Digits digit={0} dispatch={dispatch}/>
          <button>.</button>
          <button className="span-two">=</button>
        </div>
      </div>
    </Fragment>
  );
}