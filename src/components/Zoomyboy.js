import React, {useState} from 'react';

function CounterComponent(){
    const [count, setCount] = useState(0)

    function decrementCount(){
        setCount(count - 1)
    }
    function incrementCount(){
        setCount(count + 1)
    }
    return(
    <>
        <button height="10px" onClick={decrementCount}> - </button>
        <span> {count} </span>
        <button onClick={incrementCount}>+</button>
    </>
    )
}

export default CounterComponent;