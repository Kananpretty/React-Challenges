import { useRef, useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counterState, setCounterState] = useState(0);
  const [counterRefValue, setCounterRefValue] = useState(0);
  const counterRef = useRef(0);

  const incrementCounterState = () => {
    setCounterState(counterState + 1);
  };
  const decrementCounterState = () => {
    setCounterState(counterState - 1);
  };
  const incrementCounterRef = () => {
    counterRef.current += 1;
  };
  const decrementCounterRef = () => {
    counterRef.current -= 1;
  };
  const readCounterRef = () => {
    setCounterRefValue(counterRef.current);
  };

  return (
    <div className="counter-demo">
      <div className="counter-card">
        <p className="counter-card__label">useState</p>
        <h2 className="counter-card__title">Counter</h2>
        <div className="counter" aria-label="Counter with useState">
          <button
            className="counter-button"
            type="button"
            aria-label="Decrease count"
            onClick={decrementCounterState}
          >
            −
          </button>
          <span className="counter-value">{counterState}</span>
          <button
            className="counter-button"
            type="button"
            aria-label="Increase count"
            onClick={incrementCounterState}
          >
            +
          </button>
        </div>
      </div>

      <div className="counter-card">
        <p className="counter-card__label">useRef</p>
        <h2 className="counter-card__title">Counter</h2>
        <div className="counter" aria-label="Counter with useRef">
          <button
            className="counter-button"
            type="button"
            aria-label="Decrease count"
            onClick={decrementCounterRef}
          >
            −
          </button>
          <span className="counter-value">{counterRefValue}</span>
          <button
            className="counter-button"
            type="button"
            aria-label="Increase count"
            onClick={incrementCounterRef}
          >
            +
          </button>
        </div>
        <button
          className="counter-read-button"
          onClick={readCounterRef}
          type="button"
        >
          Read ref counter value
        </button>
      </div>
    </div>
  );
};

export default Counter;
