import React,{useState,Fragment} from 'react'
const Lista=()=>{
    const [arraynumero,setnumero]=useState([1,2,3,4,5,6,7,8,9])
    const [tiempo, setTiempo] = useState(1)

    const agregarElemento = () => {
        setTiempo(tiempo + 1)
        setnumero([
            ...arraynumero,
            tiempo + 9
        ])
    }

       return (
           <Fragment>
               <h4>Lista</h4>
               <button onClick={agregarElemento}>Agregar</button>
              {
                arraynumero.map((item,index) =>
                <p key={index}>{item} -{ index}</p>
              )
              }
           </Fragment>
       
    );
}
export default Lista;