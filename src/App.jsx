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
      if (state.overwrite) {
        return {
          ...state,
          currentCalc: payload.digit,
          overwrite: false
        }
      }
      if (payload.digit === "0" && state.currentCalc === "0") {
        return state}
      if (payload.digit === "." && state.currentCalc.includes(".") ) {
        return state}
      return {
        ...state,
        currentCalc: `${state.currentCalc || ""}${payload.digit}`  
      }

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentCalc == null && state.history == null){
        return state
      }

      if (state.currentCalc == null){
        return{
          ...state,
          operation: payload.operation
        }
      }

      if(state.history == null ) {
        return {
          ...state,
        operation: payload.operation,
        history: state.currentCalc,
        currentCalc: null
        }
      }

      return{
        ...state,
        history: evaluate(state),
        operation: payload.operation,
        currentCalc: null,
      }

    case ACTIONS.CLEAR:
      return {}
    
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentCalc: null
        }
      }
      if (state.currentCalc == null){
        return state
      }
      if (state.currentCalc.lenght === 1){
        return {
          ...state,
          currentCalc: null
        }
      }

      return{
        ...state,
        currentCalc: state.currentCalc.slice(0, -1)
      }

    case ACTIONS.EVALUATE:
      if (state.operation == null || state.currentCalc == null || state.history == null ){
        return state
      }

      return{
        ...state,
        overwrite: true,
        history: null,
        operation: null,
        currentCalc: evaluate(state)
      }
  }
}

function evaluate({ currentCalc, history, operation}){
  const prev = parseFloat(history)
  const current = parseFloat(currentCalc)
  if (isNaN(prev) || isNaN(current)) {
    return ""
  }
  let computation = ""

  switch(operation) {
    case "+":
      computation = prev + current
      break
    case "-":
      computation = prev - current
      break
    case "*":
      computation = prev * current
      break
    case "/":
      computation = prev / current
      break  
  }

  return computation.toString();
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
          <button className="span-two" onClick={()=> dispatch({ type: ACTIONS.CLEAR })}>AC</button>
          <button onClick={()=> dispatch({ type: ACTIONS.DELETE_DIGIT })}>DEL</button>
          <Operators operation={'/'} dispatch={dispatch}/>
          <Digits digit={"7"} dispatch={dispatch}/>
          <Digits digit={"8"} dispatch={dispatch}/>
          <Digits digit={"9"} dispatch={dispatch}/>
          <Operators operation={'*'} dispatch={dispatch}/>
          <Digits digit={"4"} dispatch={dispatch}/>
          <Digits digit={"5"} dispatch={dispatch}/>
          <Digits digit={"6"} dispatch={dispatch}/>
          <Operators operation={'-'} dispatch={dispatch}/>
          <Digits digit={"1"} dispatch={dispatch}/>
          <Digits digit={"2"} dispatch={dispatch}/>
          <Digits digit={"3"} dispatch={dispatch}/>
          <Operators operation={'+'} dispatch={dispatch}/>
          <Digits digit={"0"} dispatch={dispatch}/>
          <Digits digit={"."} dispatch={dispatch}/>
          <button className="span-two" onClick={()=> dispatch({ type: ACTIONS.EVALUATE })}>=</button>
        </div>
      </div>
    </Fragment>
  );
}