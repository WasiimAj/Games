import React, { useState } from 'react'
import './index.css';

const Counter = (props) => {
    const [counter, setCounter] = useState(0);

    const Incress = () => {
        setCounter(count => count + 1);
    }

    const Decress = () => {
        setCounter(count => count - 1);
    }

    const Reset = () => {
        setCounter(0);
    }

    return (
        <div className='counter'>
            <p> {counter} </p>
            <button 
                className='incres'
                onClick={Incress}
                >
                    ➕
            </button>
            <button 
                className='decres'
                onClick={Decress}
                >
                    ➖
            </button>
            <button
                onClick={Reset}
            >
                <img src="https://cdn-icons-png.flaticon.com/512/5277/5277847.png" alt="reset-icon" />
            </button>
        </div>
    )
}

export default Counter