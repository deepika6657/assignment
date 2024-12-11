import { React, useState, useEffect } from "react";
import CardView from "./commonComponents/CardView";

export default function Card() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] =  useState(true);
  // const fetch = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     // console.log("respone", response.data);
  //     // const data = await response;
  //     //console.log("data",data)
  //     setUsers(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data", error);
  //   }
  // };
  

  const ApiCall = async () =>{
 const response = await fetch("https://jsonplaceholder.typicode.com/photos");
 const jsonData = await response.json();

 //console.log(response.status)
setLoading(false)
setUsers(jsonData);
 console.log(jsonData);

//  setUsers(jsonData)
  }
  
 // console.log(users[0]);


  useEffect(() => {
    ApiCall()
    // fetch();
  },[]);
  
  if(loading) return <div> loading...</div>

  return (
    <div className="d-flex flex-wrap">
    {
      users.map((user,index)=>(
        <CardView data={user} key={index} />
      ))
    }
    </div>
  );
}
