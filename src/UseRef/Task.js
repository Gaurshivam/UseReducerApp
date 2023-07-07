import React, { useRef } from 'react';

const Task = () => {
    const myref = useRef("")
    let h2ref = useRef("");

    const changeData = (size) =>{
        h2ref.current.style.fontSize = size
    }

    
    const changeColor = (color) =>{
        h2ref.current.style.color = color
    }
  return (
    <div>
      <select name='' id='' onChange={(event)=>changeData(myref.current=event.target.value)}>
        <option value="">select Size</option>
        <option value="10px">10px</option>
        <option value="20px">20px</option>
        <option value="30px">30px</option>
      </select>

      <select name='' id=''  onChange={(event)=>{changeColor(myref.current=event.target.value)}}>
        <option value="">select Size</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
      </select>

      <h2 ref={h2ref}>Hello Dom Manipulation with Ref</h2>
    </div>
  );
}

export default Task;
