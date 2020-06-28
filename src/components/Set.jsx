import React, { Fragment, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


const User = () => {
    const [users, setUsers] = useState([]);

const getUsers = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    let users = await res.json()
    setUsers(users)
}
useEffect(() => {
    getUsers();
}, []);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    {users.map((user, id) => {
                        return (
                            <Fragment key={id}>
                                <div className="card-body">
                                    <h2>{user.name}</h2>
                                    <Link to={`/${user.id}/details`}><button> Show Information </button></Link>
                                </div>
    
                            </Fragment>
                        )
    
    
    
    
                    })}
                </div>
            </div>
        </div>
    
    )
}
export default User;
