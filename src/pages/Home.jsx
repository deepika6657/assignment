import React from 'react'
import { useDispatch } from 'react-redux';
import { increment , reset } from '../redux/NavbarSlice';
//import { addUser} from '../redux/DataSlice';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../components/Card';



export default function Home() {
  
  const dispatch = useDispatch();

//  function handleValue(payload){
// dispatch(addUser(payload))
//  }

  return (
   <Container fluid >
   <Row className='d-flex justify-content-center  bg-secondary vh-10 align-item-center '>
  <Col>
   <div className="d-flex align-item-center  mt-4">
    <button className='btn-success  mb-3' onClick={()=>{
      dispatch(increment())
    }}>Click</button>

      <button className='btn-success mb-3' onClick={()=>{
      dispatch(reset())
    }}>Reset</button> 
     </div>
     <> <Card /></>
   
    </Col>
    </Row>
    
   </Container>
  )
}
// <div>
//<input type='text' onChange={(e)=> handleValue(e.target.value)} /> 
//</div> 