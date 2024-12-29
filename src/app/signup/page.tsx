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
    })

    const onSignup = async () => {
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen"> 
            <h1 className="p-3">Sign Up</h1>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                type="text"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input  className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <input  className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                type="text"
                placeholder="Username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <button className="p-2 bg-blue-500 text-white rounded-lg"
            onClick={onSignup}>Sign Up</button>
            <Link className="p-3" href="/login">Login</Link>
        </div>

        

    )
}