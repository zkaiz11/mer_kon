import React from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function BtnGroup() {
    // const [email, setEmail] = useState("");
    
    return (
        <div id="btnForm">
            <button id="signin-btn">Sign In</button>
            <button id="create-btn">Create new account</button>
            <div id="continue">
                <hr /> Or continue with <hr />
            </div>
            <div id="btn-group">
                <button id="google-btn"><FcGoogle /></button>
                <button id="facebook-btn"><FaFacebook /></button>
                <button id="twitter-btn"><AiFillTwitterCircle /></button>
            </div>
        </div>
    );
}
