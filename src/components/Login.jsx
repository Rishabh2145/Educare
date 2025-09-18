import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");

    const isDisabled = email.trim() === "" || pass.trim() === "";

    const handleLogin = () => {
        if (isDisabled) return;
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData && userData.email === email && userData.pass === pass) {
            localStorage.setItem('loggedIn', 'true');
            navigate("/user");
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="login">
            <h2>Signin to your PopX account</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div>
                <div className="email">
                    <label htmlFor="email" className="email-top">Email Address</label>
                    <input type="text" name="email" placeholder="Enter email address" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="pass">
                    <label htmlFor="pass" className="pass-top">Password</label>
                    <input type="password" name="pass" placeholder="Enter password" value={pass} required onChange={(e) => setPass(e.target.value)} />
                </div>
                <button id="login-btn"
                    disabled={isDisabled}
                    style={{ backgroundColor: isDisabled ? "grey" : "#6c25ff" }}
                    onClick={handleLogin}
                >Login</button>
                {error && <p style={{color: 'red'}}>{error}</p>}
            </div>
        </div>
    )
}

export default Login;