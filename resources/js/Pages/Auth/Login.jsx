import React, { useState } from "react";
import ApplicationLogo from "../../Components/ApplicationLogo";
import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Login() {

    //destruct props "errors"
    const { errors } = usePage().props;

    //state user
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = async (e) => {
        e.preventDefault();

        //login
        Inertia.post('/login', {
            email: email,
            password: password
        });
    }
    return (
        <>
            <div className="text-center mt-20">
                <ApplicationLogo />
            </div>
            <div className="flex justify-center items-center h-96 bg-white px-6">
                <div className="p-6 max-w-sm w-full bg-indigo-200 shadow-xl rounded-md">
                    <form className="mt-4" onSubmit={loginHandler}>
                        <label className="block">
                            <span className="text-gray-700 text-sm">Email</span>
                            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input mt-1 block w-full rounded-md focus:outline-none" placeholder="Alamat Email" />
                        </label>
                        {errors.email && (
                            <div className="text-red-500">
                                {errors.email}
                            </div>
                        )}
                        <label className="block mt-3">
                            <span className="text-gray-700 text-sm">Password</span>
                            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-input mt-1 block w-full rounded-md" placeholder="Password" />
                        </label>
                        {errors.password && (
                            <div className="text-red-500">
                                {errors.password}
                            </div>
                        )}
                        <div className="flex justify-between items-center mt-4">
                            <div>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="text-indigo-500 border-gray-300 rounded focus:ring-0" />
                                    <span className="mx-2 text-gray-600 text-sm select-none">Remember</span>
                                </label>
                            </div>
                            <div>
                                <a className="block text-sm fontme text-indigo-700 hover:underline" href="/forgot-password">Lupa
                                    Password?</a>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button type="submit" className="py-2 px-4 text-center bg-indigo-600 rounded-md w-full text-white text-sm hover:bg-indigo-500 focus:outline-none">
                                LOGIN
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

