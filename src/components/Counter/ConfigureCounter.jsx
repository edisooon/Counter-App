import { useState } from "react";
import { log } from "../../log";

export default function ConfigureCounter({ onSetClick }) {
  log("<ConfigureCounter /> rendered", 1);
  const [enteredNumber, setEnteredNumber] = useState(0);

  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }

  function handleClick() {
    onSetClick(enteredNumber);
    setEnteredNumber(0);
  }

  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <input type="number" onChange={handleChange} value={enteredNumber} />
      <button onClick={handleClick}>Set</button>
    </section>
  );
}
