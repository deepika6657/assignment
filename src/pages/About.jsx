import React, { useEffect, useState } from "react";
import { Button ,Card } from "react-bootstrap";


export default function About() {
  const [userData, setUserData] = useState([]);
  const fetchApi = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log("userData", data);
    setUserData(data);
  };

  useEffect(() => {
    fetchApi()
  }, []);

  return ( 
  <div className="d-flex flex-wrap ">
   {
     userData.map(( value , index)=>(
      
       <Card key={index} className="mx-2 my-2" style={{ width: '18rem' }}>  
      <Card.Body>
        <Card.Title>{value?.name || "Name"}</Card.Title>
        <Card.Text>
         {value?.email || "email"}
        </Card.Text>
        <Button variant="primary" onClick={()=>{alert("button clicked")}}>Clicked</Button>
      </Card.Body>
    </Card> 

     ))

   }
  </div>)
}
