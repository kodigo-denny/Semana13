import React from 'react'

const Pantalla = ({children,id}) => {
  return (
    <div>
        <input type={"text"} id={id} className="form-control pantalla" value={children} readOnly />
        <input type={"hidden"} id={'Resultado'+id} value={children}/>
        <input type={"hidden"} id={'Op'+id} value="" />
    </div>
  )
}

export default Pantalla