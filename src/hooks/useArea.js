import { useState } from "react"

export const useArea = () => {

    const [valor1, setValor1] = useState('')
    const [valor2, setValor2] = useState('')
    
    const [area, setArea] = useState(0)

    const formulaArea = valor1 * valor2

    const text = (e) => {
        setValor1(e.target.value)
    }

    const text2 = (e) => {
        setValor2(e.target.value)
    }

    const calcularArea = () => {
        setArea(formulaArea)
    }

  return {
    calcularArea,
    area,
    text,
    text2
  }
}
