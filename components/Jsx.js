import React,{Fragment} from 'react';
const Jsx=()=>{
        const temperatura=10;
       return (
           <Fragment>
               <h4>Hola jsx</h4>
               <h4>
                   {
                       temperatura>19 ? 'calor' :'Frio'
                   }
               </h4>
           </Fragment>
       
    );
}
export default Jsx;