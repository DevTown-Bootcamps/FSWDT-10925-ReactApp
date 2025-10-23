import { getValue } from "@testing-library/user-event/dist/utils";
import React,{ useState,useEffect,useContext,createContext } from "react";

// 1)useState

// export default function Counter(){
//     const [count,setCounter] =useState(0);

//     const increment = ()=>{
//         setCounter(count+1);
//     }
    

//     const decremet = ()=>{
//         setCounter(count-1);
//     }

//     return(
//         <div>
//             <h2>{count}</h2>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decremet}>Decrement</button>
//         </div>
//     )
// }


//             <h2>{count}</h2>
//             <button onClick={()=> setCounter(count+1))}>Increment</button>
//             <button onClick={()=> setCounter(count-1))}>Decrement</button>


// count=count+2;
// setCounter(count+1);

//write a code to update the state by (count+5)/2

//useEfffect-used to perform side effects(fetching data, subscription, and timmer)

// export default function Counter(){
//     const [count,setCounter]=useState(0);

//     useEffect(()=>{
//         console.log("Componenet reached");
//         return ()=> console.log("Component reached");
//     },[count]);

//     return (
//         <div>
//             <p>You have clicked the button {count} times</p>
//             <button onClick={()=> setCounter(count+1)}>Increment</button>
//         </div>
//     )
// }


const ThemeContext=createContext();

function Context(){
    return (
        <ThemeContext.Provider value="dark">
            <Toolbar/>
        </ThemeContext.Provider>
    )
};

function Toolbar(){
    return <ThemeButton/>;
}

function ThemeButton(){
    const theme=useContext(ThemeContext);
    return <button style={{background: theme==="dark"?'#333':'#fff'}}>Click me</button>
}