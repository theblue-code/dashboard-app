"use client"
import Link from "next/link"
import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState(false)
    
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        setUserData(formData)
    }

    if(userData.email) {
        axios.post("http://localhost:5000/users/login",userData)
            .then(data => router.push(`/profile/${data.data._id}`))
            .catch(() => setError(true))

        setUserData({
            email: "",
            password: ""
        })
    }

    return (
        <section>
            <h1 className="flex flex-col items-center pt-10 text-2xl text-gray-900 font-extrabold">Welcome To Our Dashboard</h1>
            <div className="flex flex-col items-center justify-center px-6 py-10">
                <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                            Log In
                        </h1>
                        <form action="#" onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Your Email" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                            </div>
                            <div>
                                {error && (
                                    <p className="text-red-400">Passwords don't match</p>
                                )}
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-primary-800">Log In</button>
                            <p className="text-sm font-light text-gray-400">
                                Don't have an account? <Link href="/register" className="font-medium hover:underline text-primary-500">Create an account</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}