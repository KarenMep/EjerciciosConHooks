import { useArea } from "../hooks/useArea"

export const AreaRectangulo = () => {

    const {calcularArea, area, text, text2} = useArea();
  return (
    <>
        <h2>Calcular area de un rectangulo</h2>
        <p>Ingrese el valor de la altura</p>
        <input type="number" onChange={text}/>

        <p>Ingrese el valor de la base</p>
        <input type="number" onChange={text2}/>

        <button onClick={calcularArea}>Calcular area</button>

        <p>El valor del area es de: {area}</p>
    </>
  )
}
