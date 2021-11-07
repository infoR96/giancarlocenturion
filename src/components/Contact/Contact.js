import React,{useEffect} from 'react'
import ReCAPTCHA from "react-google-recaptcha";

// import Swal from 'sweetalert2';
import { useForm } from '../../Hooks/UseForm';

export const Contact = () => {

    const [formLoginValues, handleInputChange] = useForm({
        lName: '',
        lEmail: '',
        lPhone:'',
        lMensaje:''
    });

    const { lEmail, lName,lPhone,lMensaje } = formLoginValues;

    const funcionsend = (e) => {
        e.preventDefault();
    }

    const onChange = (e)=>{
    }
    useEffect(() => {
        
        
    }, [])

    return (
        <div className='work'>

            <div className='row justify-content-center alig-items-center text-white'>
                <div className=" col-sm-10 col-md-6 col-lg-4 my-5">
                    <h3>Enviar correo </h3>
                    <hr />
                    <h5>Nombre</h5>
                    <form onSubmit={funcionsend}>
                        <div className="my-3">

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="lName"
                                value={lName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="my-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Correo"
                                name="lEmail"
                                value={lEmail}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="my-3">

                            <input
                                type="text"
                                
                                className="form-control"
                                placeholder="Celular"
                                name="lPhone"
                                value={lPhone}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="my-3">
                        <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Mensaje"
                        rows="5"
                        name="lMensaje"
                        value={lMensaje}
                        onChange={ handleInputChange }
                    ></textarea>
                        </div>
                        <ReCAPTCHA
                            sitekey="6LeKkvocAAAAAPh9Z9nNB5SHyTVbuYFTTdyxwTTx"
                            onChange={onChange}
                            className='offset-2'
                        />
                        <div className="form-group offset-4">
                            <input
                                type="submit"
                                className="btn btn-primary my-2 "
                                value="Enviar mensaje"
                            />
                        </div>
                     
                    </form>
                </div>
            </div>
        </div>
    )
}
