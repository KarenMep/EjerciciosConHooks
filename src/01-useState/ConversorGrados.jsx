import { useGrados } from "../hooks/useGrados"


export const ConversorGrados = () => {

    const {changeValor, changeToFarenheit, reset, grados} = useGrados();
  return (
    <>
        <h2>Conversor de Grados centigrados a grados Farenheit</h2>

        <p>Ingrese un valor</p>
        <input type="number" onChange={changeValor}/>

        <button onClick={changeToFarenheit}>Convertir a grados Farenheit</button>
        <button onClick={reset}>Resetear</button>
        <p>Es igual a {grados} grados Farenheit</p>
    </>
  )
}
