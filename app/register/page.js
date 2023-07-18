"use client"

import Link from "next/link";
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";
import axios from 'axios'

import ErrorToast from "@/components/ErrorToast";

export default function Register() {

    const router = useRouter()

    const [toast, setToast] = useState(false)
    const [emailExistError, setEmailExistError] = useState(false)
    const [buttonDis, setButtonDis] = useState(false)
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            confirmPassword: e.target.confirmPassword.value
        }
        if(formData.password != formData.confirmPassword) {
            setToast(true)
            return ""
        }
        setToast(false)
        setUserData(formData)
        setButtonDis(true)
    }

    if(userData.name) {
        axios.post("https://dashboard-api-self.vercel.app/users/register",userData)
            .then((data) => {
                router.push("/profile/" + data.data._id)
            })
            .catch((err) => {
                setEmailExistError(true)
            })
        setUserData({
            name: "",
            email: "",
            password: ""
        })
    }
    

    return (
        <section className="sm:grid gap-4 grid-cols-2">
            <h1 className="flex flex-col items-center pt-10 text-2xl text-gray-900 font-extrabold">Welcome To Our Dashboard</h1>
            <div className="flex flex-col items-center justify-center px-6 py-10">
                {emailExistError && <ErrorToast />}
                <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                            Create an account
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Your Name</label>
                                <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Your Name" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Your Email" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-white">Confirm password</label>
                                <input 
                                    type="password" 
                                    name="confirmPassword" 
                                    id="confirmPassword" 
                                    placeholder="••••••••" 
                                    className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" 
                                    required
                                />
                            </div>
                            <div>
                                {toast && (
                                    <p className="text-red-400">Passwords don't match</p>
                                )}
                            </div>
                            {buttonDis ? (
                                <button 
                                    type="submit"
                                    disabled
                                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-primary-800"
                                >
                                    Create an account
                                </button> )
                                : (
                                <button 
                                    type="submit"
                                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-primary-800"
                                >
                                    Create an account
                                </button>
                                )
                            
                            }
                            <p className="text-sm font-light text-gray-400">
                                Already have an account? <Link href="/login" className="font-medium hover:underline text-primary-500">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <div className="hidden sm:p-10 lg:flex">
                <img
                    width={400}
                    src="https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                    alt="mockup"
                />
            </div>
        </section>
    )
}