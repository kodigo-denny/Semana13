import React from 'react'
import Boton from './Boton'
import Pantalla from './Pantalla'

const Calc = ({id}) => {
  return (
    <div>
        <div className='row'>
            <Pantalla id={id}>0</Pantalla>
        </div>
        <div className='row'>
            <Boton pantalla={id}>Sqrt()</Boton>
            <Boton pantalla={id}>CE</Boton>
            <Boton pantalla={id}>&lt;</Boton>
        </div>
        <div className='row'>
            <Boton pantalla={id}>E</Boton>
            <Boton pantalla={id}>PI</Boton>
            <Boton pantalla={id}>^</Boton>
            <Boton pantalla={id}>X^2</Boton>
        </div>

        <div className='row'>
            <Boton pantalla={id}>7</Boton>
            <Boton pantalla={id}>8</Boton>
            <Boton pantalla={id}>9</Boton>
            <Boton pantalla={id}>/</Boton>
        </div>
        <div className='row'>
            <Boton pantalla={id}>4</Boton>
            <Boton pantalla={id}>5</Boton>
            <Boton pantalla={id}>6</Boton>
            <Boton pantalla={id}>*</Boton>
        </div>
        <div className='row'>
            <Boton pantalla={id}>1</Boton>
            <Boton pantalla={id}>2</Boton>
            <Boton pantalla={id}>3</Boton>
            <Boton pantalla={id}>-</Boton>
        </div>
        <div className='row'>
            <Boton pantalla={id}>0</Boton>
            <Boton pantalla={id}>.</Boton>
            <Boton pantalla={id}>=</Boton>
            <Boton pantalla={id}>+</Boton>
        </div>
    </div>
  )
}

export default Calc