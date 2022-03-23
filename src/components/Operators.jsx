import React,{ Fragment } from "react";
import { ACTIONS } from "../App";


export function Operators({ dispatch, operation}) {

    return(
        <Fragment>
            <button className="operation-btn" onClick={()=> dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})}>
                {operation}
            </button>
        </Fragment>
    );
}