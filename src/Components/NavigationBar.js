import React, { useState }        from 'react';
import Button       from 'react-bootstrap/Button';
import Navbar       from 'react-bootstrap/Navbar';
import Nav          from 'react-bootstrap/Nav';
import NavDropdown  from 'react-bootstrap/NavDropdown';
import Form         from 'react-bootstrap/Form';
import FormControl  from 'react-bootstrap/FormControl';
import logo from '../logo.png.png';
import ProductSearch from '../ProductSearch';
import LoginModal from './LoginModal';


const NavigationBar = (props) => {

const [showLoginModal, setShowLoginModal] = useState(false);


const handleHideLoginModal= ()=>{
    setShowLoginModal(false);
}




    const handleShowLoginModal  = () =>{
        setShowLoginModal(true);
    }


    return(
<>
    

<Navbar style={ { backgroundColor: "#bdecb6" } }  expand="lg">


  <Navbar.Brand href="#home">
      <img style={{height: "3rem", marginRight: "0.75rem"}} src={logo}></img>

      <Navbar.Text> Huertas Urbanas </Navbar.Text>
  </Navbar.Brand>

  <ProductSearch></ProductSearch>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />

  <Navbar.Collapse id="basic-navbar-nav">


    <Nav className="ml-auto">


            { !props.user 
                ?
            <Button
             variant="primary"
             onClick={ handleShowLoginModal }
            >
                 Iniciar Sesión
            </Button>
                :

<>
        <Nav.Link>Favoritos </Nav.Link>
        
        <Nav.Link>Otro link </Nav.Link>

        <NavDropdown alignRight title={props.user}>
            <NavDropdown.Item>Mi Cuenta </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Cerrar Sesión </NavDropdown.Item>
        </NavDropdown>
</>
            }

    </Nav>
   
  </Navbar.Collapse>

</Navbar>



            <LoginModal show={showLoginModal} handleHide={handleHideLoginModal}/>
</>

    )
}

export default NavigationBar;