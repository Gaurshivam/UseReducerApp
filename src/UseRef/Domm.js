import React, { useRef } from 'react';

const Domm = () => {
       let h2ref = useRef()

    const ChangeData = () =>{
        h2ref.current.style.color = "red"
        h2ref.current.innerText = "I have change your Data"
    }
  return (
    <div>
      <h2 ref={h2ref}>Hello Dom Manipulation with Ref</h2>
      <button onClick={ChangeData}>Change Data</button>
    </div>
  );
}

export default Domm;
