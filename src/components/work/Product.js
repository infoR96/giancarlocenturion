import React from 'react';
import '../Components.css';

export const Product = ({work}) => {
    
    const {name,id,descripcion,skills}=work;

    let skil=[];

    for (let clave in skills){
        skil.push(skills[clave]);
    }
      
    return (
        <div className='col-md-5 col-lg-4 mx-4 my-4 format  '>
            <h1>{name}</h1>
            <img src={`/assets/${id}.JPG`} alt={id} className='imgs '/>
            <p className='mx-3 my-4'>
                {descripcion}
            </p>
            {skil.map(ski=>{
                return(
                    <img src={ski} className='icon mx-2' key={ski} alt='img'/>
                )
            })}

        </div>
    )
}
