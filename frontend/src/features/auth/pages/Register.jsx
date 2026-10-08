import React from "react";
import { useNavigate, Link } from "react-router";


const Register = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return(
        <main>
            <div className="formcontainer">
                <h1>Register</h1>

                <form onSubmit={handleSubmit}>

                <div className="inputgroup">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name='username' placeholder="Enter Username" />
                </div>    
                <div className="inputgroup">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name='email' placeholder="Enter email Adress" />
                </div>
                <div className="inputgroup">
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" name='password' placeholder="Enter Password" />
                </div>

                <button className='button primary-button'>Register</button>

                </form>

                <p>already have an account? <Link to={"/login"}>Login</Link></p>
            </div>
        </main>
    )
}

export default Register