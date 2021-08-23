import React from "react";
import { Link } from "react-router-dom";

function Register() {

    return (
        <div>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="logo authenticate-logo">foodizone</div>
            </Link>
            <div className="login-form">
                <form className="login-form-form" method="post" action="https://foodizone-server.herokuapp.com/register" >
                    <p className="login-form-creds">Name</p>
                    <input type="text" name="name" placeholder="Enter Name" className="login-form-input" />

                    <p className="login-form-creds">Email (username)</p>
                    <input type="email" name="username" placeholder="example@example.com" className="login-form-input" />

                    <p className="login-form-creds">Password</p>
                    <input type="password" name="password" placeholder="Enter Password" className="login-form-input" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" />

                    <p className="login-form-creds">Contact no.</p>
                    <input type="tel" name="contact" placeholder="Enter Phone" className="login-form-input" />

                    <button type="submit" className="login-form-submit" >Sign up</button>
                    <p className="register-link"> Existing User? <Link to="/authenticate" style={{ textDecoration: 'none' }}> Log in</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register;