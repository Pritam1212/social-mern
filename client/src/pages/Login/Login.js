import {useContext, useRef} from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import "./login.css";

export default function Login(){
    const email = useRef();
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext);

    const submitHandler = (e) => {
        e.preventDefault();
        loginCall({email: email.current.value, password: password.current.value}, dispatch);
    };

    console.log(user);

    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Spectrum</h3>
                    <span className="loginDesc">Stay real</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={submitHandler}>
                        <input type="email" placeholder="Email" required className="loginInput" ref={email} />
                        <input type="password" placeholder="Password" required className="loginInput" minLength="6" ref={password}/>
                        <button className="loginButton" disabled={isFetching}>{isFetching ? <CircularProgress color="white" size="20px"/> : "LogIn"}</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButtton">{isFetching ? <CircularProgress color="white" size="20px"/> : "Create a new Account!"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}