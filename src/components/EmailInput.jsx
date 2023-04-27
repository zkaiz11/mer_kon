import React from "react";
import { useState } from "react";

export default function EmailInput() {
    const [email, setEmail] = useState("");
    
    return (
        <div id="emailForm">
            <input
                type={"text"}
                className="email-input"
                value={email}
                placeholder='Phone number, Username or Email'
                onChange={(e) => setEmail(e.target.value)}
                id="email"
            />

            <div id="checkboxInput">
                <input type={"checkbox"}/>
                <label>Remember for 30 days</label>
            </div>
        </div>
    );
}
