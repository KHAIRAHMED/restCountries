import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Friend = () => {
    const {id} = useParams();
    const [detail,setDetail] = useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data=>setDetail(data))
    },[])
    return (
        <div>
            {/* <h1>This is {detail} id</h1> */}
            <h3>{detail.id}</h3>
            <h3>{detail.name}</h3>
        </div>
    );
};

export default Friend;