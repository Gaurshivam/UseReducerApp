import React, { useReducer } from 'react';
import { Button } from '@chakra-ui/react'


function  countReducer(state, action){
      if(action.type === "increasecount"){
        return(
            state={
                ...state,
                count: state.count + action.payload,
            }

        )
      } else if(action.type === "decreasecount"){
        return(
            state={
                ...state,
                count: state.count - action.payload,
            }

        )
      }
      else {
        return(
            state = {
                count : 0,
            }
        )
      }

}

const Counter = () => {
 const [state, dispatch] =  useReducer(countReducer, {count : 0})
  return (
    <div style={{marginTop:"50px"}}>
      <h2 style={{color:"green", paddingBottom:"15px"}}>Counter  : {state.count} </h2>
      <Button onClick={()=>{dispatch({
        type:"increasecount",
        payload:5
      })}}>Increate Count</Button>&nbsp;&nbsp;&nbsp;
      <Button onClick={()=>{dispatch({
        type:"decreasecount",
        payload:2
      })}}>Decreate Count</Button>&nbsp;&nbsp;&nbsp;
      <Button  onClick={()=>{dispatch({
        type:"reset",
        payload:0
      })}}>Reset Count</Button>&nbsp;&nbsp;&nbsp;
    </div>
  );
}

export default Counter;
