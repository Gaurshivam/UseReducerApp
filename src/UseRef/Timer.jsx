import React, { useRef } from 'react';
import { Button } from '@chakra-ui/react'
import { useState } from 'react';

const Timer = () => {
    const [state, setState] = useState(0);
    let timerid = useRef(0)
    // let [timerId, setTimerId] = useState(null)


     
    const StartTimer = ()=> {
      timerid.current  =  setInterval(()=>{
            setState((prevState)=> prevState + 1);
        },1000);
      }

    const StopTimer = () =>{
        clearInterval(timerid.current)
    }


    // let timer;
    // const StartTimer = ()=> {
    //     timer =  setInterval(()=>{
    //         setState((prevState)=> prevState + 1);
    //     },1000);
    //     setTimerId(timer)
    //   }

    // const StopTimer = () =>{
    //     clearInterval(timerId)
    // }


    // const StartTimer = ()=> {
    //    setTimerId(setInterval(()=>{
    //     setState((prevState)=> prevState + 1);
    // },1000));
    //   }

    // const StopTimer = () =>{
    //     clearInterval(timerId)
    // }
  return (
    <div style={{
        margin:"50px auto",
        boxShadow:"0px 0px 10px black",
        padding:"50px",
        width:"500px",
        paddingTop:"20px",
        textAlign:"center"
      }}>
      <h2>Timer : {state}</h2>
      <Button variant='outline' color='green' onClick={StartTimer}>Start</Button>&nbsp;&nbsp;&nbsp;
      <Button variant='outline' color='red' onClick={StopTimer}>Stop</Button>&nbsp;&nbsp;&nbsp;
    </div>
  );
}

export default Timer;
