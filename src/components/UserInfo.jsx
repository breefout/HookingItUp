import React, { Fragment, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

const UserInfo = props => {
        
    let { id } = useParams();
    const [person, setPerson] = useState([]);
    const getUserInfo = async () => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        let person = await res.json();
        console.log("test")
        console.log(person);
        setPerson(person);
    }
    
    useEffect(() => {
        getUserInfo();
    }, []);

    return (
        <Fragment>
            <div className='card'>
                <div className="card-body">
                    <h3>{person.name}</h3>
                    <h6>{person.username}</h6>
                    <p>{person.email}</p>
                    <p>{person.phone}</p>
                </div>
            </div>
        </Fragment>
    )

}
export default UserInfo;