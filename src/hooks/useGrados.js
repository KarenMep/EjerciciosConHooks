import React, { useState } from 'react'

export const useGrados = (valorInicial = 0) => {

    const [valor, setValor] = useState('')
    const [grados, setGrados] = useState(valorInicial)

    const operacion = ((valor * 9/5) + 32)

    const changeValor = (e) => {
        setValor(e.target.value)
    }

    const changeToFarenheit = () => {
        setGrados(operacion)
    }

    const reset = () => {
        setGrados(valorInicial)
    }


  return {
    changeValor,
    changeToFarenheit,
    reset,
    grados,
  }
}
