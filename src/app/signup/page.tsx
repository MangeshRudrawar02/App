"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
// import {axios} from "axios";


export default function SignUpPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    }}

    const onSignup = async () => {
    }
    return (
        <div className="felx felx-col items-center jsutify-center min-h-screen py-2"> 
            <h1>Sign Up</h1>
            <input
                type="text"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <input
                type="text"
                placeholder="Username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <button onClick={onSignup}>Sign Up</button>
            <Link href="/login">Login</Link>
        </div>
        

    )
}