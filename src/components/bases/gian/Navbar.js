import React from 'react'
import { AppBar,makeStyles,Toolbar,Typography, IconButton, Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import WorkIcon from '@material-ui/icons/Work';
import BookIcon from '@material-ui/icons/Book';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import {Link} from "react-router-dom";
import '../../../App.css'

const useStyles = makeStyles(theme=>({ 
    ofset:theme.spacing(2),
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]:{
            display:"none"
        },
      },
      list:{
        [theme.breakpoints.down('sm')]:{
          display:"none"
      }
      },
    title:{
        flexGrow:1
    },
    boton: {
        background: "linear-gradient(70deg, #212121 30%, #f50057 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        marginRight:theme.spacing(2),
      },

    
}))

export const Navbar = ({mostrar}) =>{
    const classes = useStyles();
    return(
        <div>
            
            <AppBar >
                <Toolbar>
                    <IconButton aria-label="menu" 
                    color="inherit"
                     className={classes.menuButton}
                     onClick={mostrar}>
                    <MenuIcon/>
                    </IconButton>
                    <Typography variant='h5' className={classes.title}>
                        Giancarlo Centurión
                    </Typography>
                
                    <div className={classes.list} >
                    <Link className='curri' to="/work"><Button  variant= "contained" className={`${classes.boton} curri ` } startIcon={<WorkIcon/>}>  Work</Button></Link> 
                    <Link className='curri' to="/blog"><Button  variant= "contained" className={`${classes.boton} curri ` } startIcon={<BookIcon/>}>Blog</Button></Link> 
                    <Link className='curri' to="/"><Button variant = "contained" className={classes.boton} startIcon={<InfoIcon/>}> About</Button></Link> 
                    <Link className='curri' to="/contact"><Button  variant= "contained" className={`${classes.boton} curri ` } startIcon={<ContactMailIcon/>}>Contact</Button></Link> 
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.ofset}> </div>
        </div>
    )
}
