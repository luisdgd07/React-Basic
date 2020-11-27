import React,{useState,Fragment} from 'react';
const Contador=()=>{
    const[numero,setNumero]=useState(0);
    const aumentar=()=>{
        setNumero(numero+1);
    }
    const disminuir=()=>{
        setNumero(numero-1);
    }
       return (
           <Fragment>
               <h3>Hola component {numero}</h3>
       <button onClick={aumentar}>Aumentar</button>
       <button onClick={disminuir}>Diminuir</button>
           </Fragment>
       
    );
}
export default Contador;