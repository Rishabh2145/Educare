import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () =>{
    const navigate = useNavigate();
    return(
        <div className="home">
            <div className="blank"></div>
            <div className="note">
                <h2>Welcome to PopX</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="btns">
                <button className="reg" onClick={() => navigate("/register")}>Create Account</button>
                <button className="log" onClick={() => navigate("/login")}>Already Registered? Login</button>
            </div>
        </div>
    )
}

export default Home;