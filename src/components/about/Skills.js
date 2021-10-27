import logo from '../../logo.svg';
import React,{useState,useEffect} from 'react'


export const Skills = () => {

  const [skills, setSkills]= useState({
    dev:true});
    const {dev} = skills

    const change = ()=>{
      setSkills({
        ...skills,
        dev:!dev
      })
    }

    useEffect(() => {
  setTimeout(change, 10000);
})

    return (

      <div >
        { skills.dev?
        <div className='icons  '>
          <div className= 'd-block '>
          <img src={logo} className="App-logo dev  mx-1  dev2" alt="logo" />
          <img className='App-logo-static dev mx-1 dev2' src='https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' alt="HTML5"></img>
          <img className='App-logo-static dev mx-1 dev2' src='https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' alt="CSS3"></img>
          <img className='App-logo-static dev mx-1 dev2 ' src='https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' alt="Bootstrap"></img>
          <img className='App-logo-static dev mx-1 dev2' src='https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png' alt="Redux"></img>
          </div>
          <div className='d-block '>
          <img className='App-logo-static dev dev3 mx-1' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png' alt="NodeJSs"></img>
          <img className='App-logo-static ing dev3 mx-1' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png' alt="MongoDB"></img>
          <img className='App-logo-static dev dev2 mx-1' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png' alt="Git"/>
          </div>
        </div>:
         <div className='icons  '>
         <div className= 'd-block '>
         <img className='App-logo-static dev2 dev mx-1 my-2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/2048px-Python.svg.png' alt="python"/>
         <img className='App-logo-static ing mx-1' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png' alt="powerPoint"></img>
         <img className='App-logo-static ing mx-1 my-2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/AutoCad_logo.svg/2560px-AutoCad_logo.svg.png' alt="autoCAD"></img>
         <img className='App-logo-static dev dev2  mx-1 my-2'src='https://hexagonmining.com/-/media/Images/Hexagon/Hexagon%20Core/Hexagon%20Mining/Products/New%20Product%20Images/3d_data_icon.ashx?h=330&w=330&la=en&hash=22CE10496579B49B4696F0F90452C1B0' alt="minesight"/>
         </div>
         <div className= 'd-block offset-1'>
         <img className='App-logo-static ing mx-1' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png' alt="Excel"></img>
         <img className='App-logo-static dev  mx-3' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png' alt="Jupyter"></img>
         <img className='App-logo-static ing mx-1' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_Word_%282019%E2%80%93present%29.svg.png' alt="Word"></img>
         <img className='App-logo-static dev dev2 mx-1 my-2' src='https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png' alt="MYSQL"/>
         </div>
           
       </div>

        }
      </div>


    )
}
