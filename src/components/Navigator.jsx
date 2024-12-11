import React from 'react'
import { Container, Row , Nav,Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Navigator() {
  const { count} = useSelector((state) => state.counter);
  const { value} = useSelector((state)=> state.DataStore);
  
  return (
    <Container fluid className='bg-light py-3'>
      <Row className='justufy-content-between align-item-center'>
      <Col>
         <Nav className='d-flex'>
              <Nav.Item>
              <Link to={'/'} className='nav-link text-dark px-2'>HOME</Link>
              </Nav.Item>
              <Nav.Item>
              <Link to={'/aboutUs'} className='nav-link text-dark px-2'>ABOUT US</Link>
              </Nav.Item>
              <Nav.Item>
             <Link to={'/contactUs'} className='nav-link text-dark px-2'>CONTACT US</Link>
              </Nav.Item>
              <Nav.Item>
             <Link to={'/game'}  className='nav-link text-dark px-2'>GAME</Link>
              </Nav.Item>
              </Nav>
              </Col>
              <Col className='text-end'>
        <span  className='badge bg-secondary me-2'>{count}</span> 
        <span className='badge bg-primary'>{value}</span>
        </Col>
      </Row>
    </Container>
    
  )
}



//badge is styling component used to highlight and style the text it create a cylinderical shape..
//py= padding y (vertically) , me- marign-end 