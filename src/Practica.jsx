import { usePractica } from "./hooks/usePractica"


export const Practica = () => {

    const {moneda, changeToDolar, reset, changeText} = usePractica();


  return (
    <>
        <h1>Practicas mia con useState</h1>
        <h2>Cambio de dolar</h2>
        <p>11/01/2023 : 19.02</p>
        <p>11/01/2023 : 19.01</p>
        <p>11/01/2023 : 18.99</p>
        <p>Ingrese un valor</p>
        <input type="number" onChange={changeText}/>
        <p>En pesos es {moneda}</p>
        <button onClick={changeToDolar}>Click para convertir a pesos</button>
        <button onClick={reset}>Borrar valor</button>

    </>
  )
}
