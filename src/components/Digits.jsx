import React,{ Fragment } from "react";
import { ACTIONS } from "../App";

export function Digits({ dispatch, digit}){

    return(
        <Fragment>
            <button className="digit-btn" onClick={()=> dispatch({ type: ACTIONS.ADD_DIGIT, payload: {digit}})}>{digit}</button>
        </Fragment>
    );
}