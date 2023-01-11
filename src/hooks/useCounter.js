import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = ( value = 1) => {
        setCounter(counter + value)
    }

    const decrement = () => {
        setCounter( counter -1 )
    }

    const reset = () => {
        setCounter(initialValue * 19.07)
    }

    return{
        counter,
        increment,
        decrement,
        reset
    }
}