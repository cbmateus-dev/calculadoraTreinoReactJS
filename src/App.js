/* eslint-disable no-eval */

import './App.css';
import React, { useState } from 'react';

function App() {

  const [vlrTela, setvlrTela] = useState('')
  const [resultado, setResultado] = useState(0)
  const [operado, setOperado] = useState('0')
 

  //Componente
  const Tela = (valor, res) => {
    return (
      <div className='tela' >
        <span className='telaOperacao'>
          {valor}
        </span>
        <span className='telaResultado'>
          {res}
        </span>
      </div>
    )
  }

  const Btn = (label, onClick) => {
    return (
      <button className='btn' onClick={onClick}>{label}</button>
    )

  }
  //Funções Calculadora

  const addDigitoTela = (d) => {
    if ((d === '+' || d === '-' || d === '*' || d === '/') && operado) {
      console.log("+-*/")
      setOperado(false)
      setvlrTela(resultado + d)
      
      return
    }
    if (operado) {
      setvlrTela(d)
      setOperado(false)
      return
    }
    const valorDigitadoTela = vlrTela + d
    setvlrTela(valorDigitadoTela)

  }

  const limparMemoria = () => {
    setOperado(false)
    setvlrTela('')
    setResultado(0)

    return
  }

  const operacao = (oper) => {
    if (oper === 'bs') {
      let vtela = vlrTela
      vtela = vtela.substring(0, (vtela.length - 1))
      setvlrTela(vtela)
      setOperado(false)
      return
    }
    try {

      const r = eval(vlrTela) //Calculo da Tela
      setResultado(r)
      setOperado(true)
    } catch {
      setResultado('ERRO')
    }
  }


  return (
    <div className="App">
      <><div className='container'>
        <h3>
          Calculadora Matematica Simples
        </h3>

        {Tela(vlrTela, resultado)}

        <div className='botoes'>
          <div>
            {Btn('AC', limparMemoria)}
            {Btn('(', () => addDigitoTela('('))}
            {Btn(')', () => addDigitoTela(')'))}
            {Btn('/', () => addDigitoTela('/'))}
          </div>
          <div>
            {Btn('7', () => addDigitoTela('7'))}
            {Btn('8', () => addDigitoTela('8'))}
            {Btn('9', () => addDigitoTela('9'))}
            {Btn('X', () => addDigitoTela('*'))}
          </div>
          <div>
            {Btn('4', () => addDigitoTela('4'))}
            {Btn('5', () => addDigitoTela('5'))}
            {Btn('6', () => addDigitoTela('6'))}
            {Btn('+', () => addDigitoTela('+'))}
          </div>
          <div>
            {Btn('1', () => addDigitoTela('1'))}
            {Btn('2', () => addDigitoTela('2'))}
            {Btn('3', () => addDigitoTela('3'))}
            {Btn('-', () => addDigitoTela('-'))}
          </div>
          <div>
            {Btn('.', () => addDigitoTela('.'))}
            {Btn('0', () => addDigitoTela('0'))}
            {Btn('←', () => operacao('bs'))}
            {Btn('=', () => operacao('='))}
          </div>
        </div>
      </div>
      </>
    </div>
  );
}

export default App;
