import React,{useState,Fragment} from 'react'
const Formulario=()=>{
  const[datos,setDatos]=useState({
    nombre:'',
    apellido:''
  });  
  const handleInputChange=(event)=>{
    setDatos({
      ...datos,
      [event.target.name]:event.target.value
    })
  }
  const enviardatos=(e)=>{
    e.preventDefault();
     
  }
       return (
           <Fragment>
             <h3>Formulario</h3>
             
             <form className="row" onSubmit={enviardatos}>
             <div className="col-md-3">
              <input placeholder="Nombre"  className="form-control" type="text" name="nombre" onChange={handleInputChange}/>
             </div>
             <div className="col-md-3">
              <input placeholder="Apellido" className="form-control" type="text" name="apellido" onChange={handleInputChange}/>
             </div>
             <div className="col-md-3">
              <button  className="btn btn-primary" type="submit">Enviar</button>
             </div>
             </form>
           </Fragment>
       
    );
}
export default Formulario;