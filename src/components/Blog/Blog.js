import React from 'react'
import ReactPlayer from 'react-player'

export const Blog = () => {
    const youtubestyle={
        marginleft: '200px'
    }

    return (
        <div className='work'>

            <div className='row justify-content-center alig-items-center text-white'>

                <div className='col-md-10 col-lg-8 mx-4 my-4 format  '>
                    <h1>Filter con Python</h1>
                    <p>En la universidad aprendí sobre un programa aplicado a minería llamado MineSight
                        servía para calcular volúmenes, tonelajes y el diseño de la mina en 3D,
                        era un programa muy interactivo y todos siempre hablaban de él como algo
                        indispensable para ser ingeniero de minas, sin mencionar la importancia
                        del certificado. Tenía compañeros con los que me inscribía a cursos dictados
                        de manera en las que un profesor iba realizando el proceso y más de veinte alumnos
                        seguían el procedimiento paso a paso en sus computadores, si has estado en alguna capacitación de este
                        tipo sabrás que el docente muchas veces no puede avanzar mientras ayuda con errores de instalación o a alguien que se perdió en el proceso, debo confesar que muchas veces yo fui ese alguien y el docente
                        se la pasaba solo con un estudiante mientras los demás congelados hasta que uno se nivele generaba retraso y muchas veces era aburrido ir a clase.
                    </p>
                    <p>
                        Tenía bastantes problemas precisamente con  MineSight, debido a que no podía entender como funcionaba el programa, entendía que debía hacer clic aquí y allá y de pronto podías visualizar una mina con todos sus detalles en tu monitor, adoraba esa sensación y quería entenderla, era inevitable
                        tomar una foto y lucirla. Por ese tiempo llevábamos el curso de Computación y Algoritmos en la universidad y eso me permitió ver que las computadoras solo hacen lo que les pedimos, para mí esto fue algo muy interesante y pude entender por qué era necesario cargar todos esos archivos al programa
                        antes de usarlo,Minesigth los necesitaba para hacer cálculos y mostrar el resultado en el monitor, la respuesta sencilla y brillante me hizo ver que no era magia sino cálculos, cálculos que alguien había escrito en forma de
                        código, hasta este momento solo conocía programación estructurada y tenía más dudas que respuestas.
                    </p>
                    <p>
                        Años más tarde luego de aprender Python y conocer Jupyter pude recordar una herramienta de MineSight
                        llamada filter que permite seleccionar taladros de acuerdo a parámetros ingresados como la ley o el tipo de roca y me di cuenta de que se podía hacer un análisis como este desde mi celular usando unas pocas líneas de código en
                        Jupyter, me quede asombrado de todo el potencial que tiene Python. Te dejo la receta en
                        gitHub.
                    </p>


                </div>

            </div>
            <div className=' row justify-content-center alig-items-center '>

                <ReactPlayer  style = {youtubestyle} url='https://www.youtube.com/watch?v=V354zMRhgqc&t=0s' controls={true} />

            </div>

        </div>
    )
}
