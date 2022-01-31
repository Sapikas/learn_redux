import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, user} from './actions';

function App() {
  const counter = useSelector(state=>state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      <div>
        <button onClick={()=> dispatch(user())}>{isLogged ? 'Log Out' : 'Login'}</button>
      </div>
      {isLogged ? <h3>Valuable Info I shouldn't see</h3> : ''}
    </div>
  );
}

export default App;
