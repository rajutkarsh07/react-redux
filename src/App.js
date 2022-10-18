import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./redux/actions";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Increament/Decrement counter</h1>
      <h3>Using React and redux</h3>

      <div>
        <button title="Decrement" onClick={() => dispatch(decNumber(1))}>
          -
        </button>
        <input name="quantity" type="text" value={myState} />
        <button title="Increment" onClick={() => dispatch(incNumber(1))}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
