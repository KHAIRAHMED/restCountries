import React from 'react';
import { useEffect, useState } from 'react';
import Element from '../../components/Element/Element';


const Home = () => {
    const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
    return (
        <div>
             <h1> length :{users.length}</h1>
            {
                users.map(user=><Element user={user}></Element>)
            } 
        </div>
    );
};

export default Home;