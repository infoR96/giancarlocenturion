import React from 'react'
import GetAppIcon from '@material-ui/icons/GetApp';
import { Button } from '@material-ui/core';


export const Present = () => {


    return (
        <div className='present col-lg-7 text-white mx-2 my-3'>

            <h1>Hola, Bienvenidos y Bienvenidas</h1>
            <p>Mi nombre es Giancarlo Centurión Camacho, tengo veinticuatro años y
                soy egresado de la carrera de ingeniería de Minas. Me forme de manera autodidacta
                en programación y desarrollo web.
            </p>
            <p>
            Usando modelos matemáticos he desarrollado scripts y Formularios en Python que permiten analizar la variación de resultados mediante gráficas, también algunos para automatizar tareas en AutoCAD.
            </p>
            <p>
            Con ayuda de Jupyter puedo manejar datos y analizarlos, realicé una receta que permite filtrar taladros por medio de parámetros como la ley o tipo de roca, similar a la herramienta filter de MS3D  con la ventaja que lo puedes hacer desde tu celular.
            </p>
            <p>
            En este espacio quiero compartir contigo mis proyectos, puedes clonar los repositorios desde GitHub y divertirte con el código.
            </p>
            <Button variant="contained"
                color="primary"
                startIcon={<GetAppIcon />}
            // href=''>
            >
                <a color ='secondary' href='download' className='curri'>
                    currículum
                </a>
            </Button>

        </div>
    )
}
