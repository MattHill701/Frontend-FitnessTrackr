import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
                          
const Navigation = () => {    
     return (
       <Navbar bg="dark" variant="dark"> 
         <Container> 
           <Navbar.Brand href="#home">workout</Navbar.Brand> 
           <Nav className="me-auto"> 
             <Nav.Link href="#Home">Home</Nav.Link> 
             <Nav.Link href="#Register">Register</Nav.Link> 
             <Nav.Link href="#Login">Login</Nav.Link> 
           </Nav>        
         </Container> 
       </Navbar> 
     );           
};    

// Export the component
export default Navigation;




