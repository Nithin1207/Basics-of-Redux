import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from "../store/Redux.jsx"

const Counter = () => {
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  function handleIncrement() {
    dispatch(counterActions.increment());
  }

  function handleIncrese() {
    dispatch(counterActions.increase(10));
  }

  function handleDecrement() {
    dispatch(counterActions.decrement());
  }

  const Count = useSelector(state => state.counter);
  const toggle = useSelector(state => state.showCounter);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{Count}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
        <button onClick={handleIncrese}>increse by 5</button>
      </div>
    </main>
  );
};

export default Counter;
