import { useState } from "react"

export const usePractica = (pesos = 0) => {
    
    const [inputText, setInputText] = useState('')
    const [moneda, setMoneda] = useState(pesos)

    const valorDolar = 19.01;

    const changeText = (e) => {
        setInputText(e.target.value)
    }

    const changeToDolar = () => {
        setMoneda(inputText * valorDolar)
    }

    const reset = () => {
        setMoneda(pesos)
    }
    return {
        changeToDolar,
        changeText,
        moneda,
        reset
    }
}
