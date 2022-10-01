import { useRef } from "react";
import "./register.css";
import { useNavigate } from "react-router";
import axios from "axios";

export default function Register(){
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        if(confirmPassword.current.value !== password.current.value){
            confirmPassword.current.setCustomValidity("Passwords don't match!");
        }else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try{
                await axios.post("/auth/register", user);
                navigate('/login');    
            }catch(err){
                console.log(err);
            }
        }
        
    };

    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Spectrum</h3>
                    <span className="loginDesc">Stay real</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={submitHandler}>
                        <input placeholder="Username" className="loginInput" required ref={username}/>
                        <input type="email" placeholder="Email" className="loginInput" required ref={email} />
                        <input type="password" placeholder="Password" className="loginInput" required ref={password}/>
                        <input type="password" placeholder="Confirm Password" className="loginInput" required ref={confirmPassword} minLength="6" />
                        <button className="loginButton" type="submit">SignUp</button>
                        <button className="loginRegisterButtton">Log into Account!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}