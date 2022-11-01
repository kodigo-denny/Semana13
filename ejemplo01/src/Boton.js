import React from 'react'

function presionar(v, id){
    const pantalla = document.querySelector('#'+id);
    const resultado = document.querySelector('#Resultado'+id);
    const op = document.querySelector("#Op"+id);
    
    if(!isNaN(v)){
        if(pantalla.value == "0")
            pantalla.value = v;
        else
            pantalla.value += v;
    }
    if(v == ".")
        if(!pantalla.value.includes("."))
            pantalla.value += v;

    if(v == "CE"){
        pantalla.value = "0";
        resultado.value = "0";
        op.value = "";
    }
    if(v == "<"){
        let t = pantalla.value.length;
        pantalla.value = pantalla.value.substring(0, t-1);
        if(pantalla.value == "")
            pantalla.value = "0";
    }
    if(v=="+" || v=="-" || v=="*" || v=="/" || v=="^"){
        resultado.value = pantalla.value;
        op.value = v;
        pantalla.value = "0";
    }
    if(v=="="){
        let n1 = Number(resultado.value);
        let n2 = Number(pantalla.value);

        switch(op.value){
            case '+':
                resultado.value = n1 + n2;
                break;
            case '-':
                resultado.value = n1 - n2;
                break;
            case '*':
                resultado.value = n1 * n2;
                break;
            case '/':
                resultado.value = n1 / n2;
                break;
            case '^':
                resultado.value = Math.pow(n1, n2);
                break;
        }
        pantalla.value = resultado.value;
    }

    if(v == "Sqrt()"){
        let num = Number(pantalla.value);
        resultado.value = Math.sqrt(num);
        pantalla.value = resultado.value;
    }

    if(v == "X^2"){
        let num = Number(pantalla.value);
        resultado.value = Math.pow(num,2);
        pantalla.value = resultado.value;
    }

    if(v == "E"){
        pantalla.value = Math.E;
    }

    if(v == "PI")
        pantalla.value = Math.PI;
    
}

const Boton = ({children, pantalla}) => {
    let estilo = "col-3";

    if(children=="CE")
        estilo = "col-6";

  return (
    <div className={estilo}>
        <button className='btn btn-secondary btn-calc' onClick={() => presionar(children, pantalla)} >{children}</button>
    </div>
  )
}

export default Boton