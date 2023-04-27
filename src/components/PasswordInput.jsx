import React from "react";
import { useState } from "react";

export default function PasswordInput() {
    // initial value
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(true);

    return (
        <div id="password-form">
            <div>
                <input
                    type={visible ? "text" : "password"}
                    className="password-input"
                    value={password}
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                />

                <div onClick={() => setVisible(!visible)}>
                    { visible ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}
                </div>
            </div>
            <button id="text-btn">Forgot Password?</button>
        </div>
    );
}
