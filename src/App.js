import { Heading } from '@chakra-ui/react';
import './App.css';
import Counter from './UseReducerapp/Counter';
import Timer from './UseRef/Timer'

function App() {
  
  return (
    <div className='App'>
    <Heading>UseReducer</Heading>
    <Counter /><br/><br/><hr/>
    <Heading style={{marginTop:"20px"}}>UseRef</Heading>
    <Timer /><br/><hr/>
    </div>
  );
}

export default App;
