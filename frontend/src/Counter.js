import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div role="region" aria-label="Counter">
            <h1 aria-live="polite">Counter: {count}</h1>
            <button
                onClick={() => setCount(count + 1)}
                aria-label="Increase counter"
                autoFocus
            >
                Increase
            </button>
        </div>
    );
};

export default Counter;