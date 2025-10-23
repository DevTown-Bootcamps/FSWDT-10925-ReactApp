import React,{ useState } from "react";

// 1)useState

export default function Counter(){
    const [count,setCounter] =useState(0);

    const increment = ()=>{
        setCounter(count+1);
    }
    

    const decremet = ()=>{
        setCounter(count-1);
    }

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decremet}>Decrement</button>
        </div>
    )
}

// count=count+2;
// setCounter(count+1);

//write a code to update the state by (count+5)/2