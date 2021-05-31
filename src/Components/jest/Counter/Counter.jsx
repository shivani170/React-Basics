import React, { useState } from 'react'
import './Counter.css';

export default function Counter() {

    const [counterValue, setCounterValue] = useState(0)
    const [inputValue, setInputValue] = useState(1)
    const subtractButton = () => {

    }
    const addButton = () => {
       setCounterValue(counterValue + inputValue )
    }
    return (
        <div>
            <h1 data-testid="header">My Counter</h1>
            <h1 data-testid="counter">{counterValue}</h1>
            <button data-testid="subtract-btn" onClick={subtractButton()}>-</button>
            <input
                data-testid="input"
                type="number"
                value={inputValue}
                className="text-center"
                onChange={(e) => { setInputValue(e.target.value) }} />
            <button data-testid="add-btn" onClick={addButton}>+</button>

        </div>
    )
}
