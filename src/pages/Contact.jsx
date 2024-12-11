import React,{useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Form } from 'react-bootstrap';

export default function Contact() {
    
  const [first, setFirst] =  useState('');
  const [last, setLast] =  useState('');
  const [email, setEmail] =  useState('');
  const [phone, setPhone] =  useState('');
  const [note, setNote] =  useState('');

 function validate(){ 
 let isValid = true;
  if(first.length===0){
  toast.error("enter your firstname");
   isValid=false; }

  if(last.length === 0){
    toast.error("enter your lastName..");
    isValid=false; }
  
   if(email.length === 0){
    toast.error("enter email")
    isValid=false; }
   else if (!/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(String(email))) {
    toast.error("enter valid email") 
    isValid=false; }
  
  
  if(phone.length===0 || !/^\+?[0-9]\d{10}$/.test(phone)){
    toast.error("enter valid phone number") 
     isValid=false; }
  
   if(note.length===0){
    toast.error("write a note") 
    isValid=false; }
   return isValid;
     }

  function handleSubmit(event){
    event.preventDefault();
    console.log("before validation")
    
      if(validate())
      {
     alert("form submitted!!")
       setFirst(' ');
       setLast(' ');
       setEmail(' ');
       setNote(' ');
       setPhone(' '); 
       }
       
      // const validation = validate();
      // validation && alert("logged In")
        //  console.log("after validation")  
         }


  return (
  
      <div className="d-flex justify-content-center bg-secondary vh-100 align-items-center ">
      <div  className='bg-white rounded  p-4 w-25'>
      <h3 className="text-center mb-3">Contact us</h3>
      <Form onSubmit={handleSubmit} >
       <div className='mb-3'>
       <label >FirstName </label>
       <input type='text' name='first' className="form-control rounded-0" value={first} placeholder='FirstName' onChange={(e)=>{setFirst(e.target.value)
       }}/>
       </div>
       <div className='mb-3'>
       <label>LastName : </label>
       <input type='text' name='last' className='form-control rounded-0' value={last} onChange={(e)=>{setLast(e.target.value)}} placeholder='LastName'/>
       </div>
       
       <div className='mb-3'>
       <label>Email : </label>
       <input type='text' name='email' className="form-control rounded-0" value={email}  onChange={(e)=>{setEmail(e.target.value)}}placeholder='Email'/>
       </div>
       <div className='mb-3'>
       <label>Phone No. : </label>
       <input type='text' name='phone'  className="form-control rounded-0" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder='Phone No.'/>
       </div>
       <div className='mb-3'>
       <label>Notes : </label>
       <textarea type='text'  name='note'  className="form-control " value={note} row='3' onChange={(e)=>{setNote(e.target.value)}}  placeholder='Comments....'/>
       </div>
        <button  className='btn-success  w-100 '>Submit</button>
        
        </Form>
        
        </div>
    </div>
  )
}
