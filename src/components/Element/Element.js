import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Element = (props) => {
    const {name,email,id} = props.user
    const history = useHistory();
    const handler = (useId)=>{
        history.push(`/friends/${useId}`)
    }
    const userStyle = {
        border:"1px solid gray",
        margin:"10px",
        padding : "10px"
    }
    return (
        <div style={userStyle}>
            <h2>Name : {name}</h2>
            <h4>Name : {email}</h4>
            {/* <Link to={`/friends/${id}`}>
                <button>Show Detail{id}</button>
            </Link> */}
            <button onClick={()=>handler(id)}>Detail</button>
        </div>
    );
};

export default Element;