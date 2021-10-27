import React from 'react'
import '../../../App.css'
import {
    ListItem,
    Button,
    makeStyles
} from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import BookIcon from '@material-ui/icons/Book';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import {Link} from "react-router-dom";

const estilos = makeStyles(theme=>({
    
    boton: {
        background: "linear-gradient(70deg, #f50057 15%,  #212121  50%)",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        height: 48,
        textdecoration:"none"

      }
    
    }))

export const Listas = ({mostrar}) => {


    const classes = estilos();
    return (
        <div>
                <ListItem button className={classes.boton} >
                <Link onClick={mostrar}  className ='curri' to="/work"><Button  className ='curri' startIcon={<WorkIcon/>} >Work </Button></Link>
                </ListItem>
                <ListItem button className={classes.boton}>
                <Button  startIcon={<BookIcon />} > Blog </Button>
                </ListItem>
                <ListItem button className={classes.boton}>
                <Link   className ='curri' onClick={mostrar} to="/"><Button   startIcon={<InfoIcon />} > About </Button> </Link> 
                </ListItem>
                <ListItem  button className={classes.boton}>
                <Button  startIcon={<ContactMailIcon />}> Contact </Button>
                </ListItem>
        
        </div>
    )
}
