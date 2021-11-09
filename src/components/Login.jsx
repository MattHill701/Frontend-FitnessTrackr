
//import all required components
import React, { Component } from 'react';

//import all react-bootstrap components
import {Form, Button} from 'react-bootstrap';
                          
const Login = () => {    
     return (
       <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control type="email" placeholder="Enter email" />
           <Form.Text className="text-muted">
            LOGIN PAGE
           </Form.Text>
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control type="password" placeholder="Password" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicCheckbox">
           <Form.Check type="checkbox" label="Check me out" />
         </Form.Group>
         <Button variant="primary" type="submit">
           Submit
         </Button>
       </Form>

     );           
};                       
                         
export default Login;

