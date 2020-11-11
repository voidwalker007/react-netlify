

import { useEffect, useState } from 'react';

import './App.css';

function App() {

 const [data, setData] = useState([]);
 const [data1, setData1] = useState([]);


 useEffect(() => {
  fetchData();

  loadData();
 }, [])

async function fetchData(){
   const api="https://jsonplaceholder.typicode.com/users";

   const result= await fetch(api);
   const data1 = await result.json();
   console.log(data1);
   setData1(data1);

 }

 const loadData = async () =>{

   await fetch("https://jsonplaceholder.typicode.com/users")
  .then(response =>response.json())
  .then( receiveddata => setData(receiveddata))
  .catch(error =>{
    console.log(error,"error aa gya");
  })

 }
 

 
  return (
   
    <div className="App">
  
      
       {data.map( (user)=>(
         <div className="listv" key={user.id}>{user.name}</div>
       ))}

       <br/>
       <hr/>-
        {data1.map( (user1)=>(
         <div className="listv" key={user1.id}>{user1.name}</div>
       ))}
       
    </div>
  );
}

export default App;
