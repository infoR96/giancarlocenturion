import React from 'react'


import { Product } from './Product';

const works = [
    {
        name: 'Modelo predictivo Kuz Ram',
        id: 'calculo',
        url: 'https://github.com/infoR96/PyV',
        descripcion: 'Script que utiliza el Modelo matematico segun Kuz Ram para predecir la fragmentacion',
        skills: {
            python: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/2048px-Python.svg.png'
            
        }
    },
    {
        name: 'Organiza tu Equipo',
        id: 'mern',
        descripcion: 'Fronted de aplicación para agendar actividades de un equipo de trabajo, desarrollo completo de una app CRUD con modelo de herramientas MERN'  ,
        url: 'd mern',
        skills: {
            react: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
            redux:'https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png'
        }
    }, {
        name: 'Velocidad de una partícula',
        id: 'velocidad',
        descripcion: 'Script para calcular la velocidad de una partícula en un taladro segun modelo matemático',
        url: 'd mern',
        skills: {
            python: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/2048px-Python.svg.png',
        }
    }, {
        name: 'inspira',
        id: 'inspira',
        descripcion: 'Diseño Fronted para una tienda de muebles de melamina',
        url: 'd inspira ',

        skills: {
            html:'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
            css:'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
            bts:'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg'
            
        },
        

    },
    {
        name: 'Viajando con mis amigos',
        id: 'mapas',
        descripcion: 'Aplicación que utiliza el API de google Maps para mostrar un lugar indicado, te muestra fotos, comentarios, lugares cercanos y como llegar dependiendo de tu vehículo. Está creada utilizando la metodología de Components.',
        url: 'd inspira ',

        skills: {
            react: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
        },
    }
]

export const Work = () => {

    return (

        <div className='work'>

            <div className=' row justify-content-center alig-items-center'>

                {works.map(work => {
                    return (
                        <Product work={work} key={work.name} />)
                })}
            </div>

        </div>
    )
}
