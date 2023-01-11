import { useCounter } from "../hooks/useCounter"
import { Practica } from "../Practica";
import { ConversorGrados } from "./ConversorGrados";

export const CounterWithCustomHook = () => {

    const{counter, increment, decrement, reset} = useCounter();

  return (
    <>
        <h1>Counter with Hook: {counter}</h1>

        <button onClick={() => increment(2)}>+1</button>
        <button onClick={reset} >reset</button>
        <button onClick={decrement}>-1</button>

        <hr />

        {/* Practica */}
        <Practica/>
        <ConversorGrados/>
    </>
  )
}
