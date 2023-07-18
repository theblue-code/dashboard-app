import Header from "@/components/Header"
import Profile from "@/components/Profile"
import Link from "next/link"
import { notFound } from "next/navigation"

async function fetchUser(id) {
    const userResponse = await fetch(`http://localhost:5000/users/${id}`)
    if (!userResponse.ok) return undefined
    return userResponse.json()
}

export default async function Page({ params }) {
    const user = await fetchUser(params.slug)
    if(!user) notFound()
    return (
        <div className="bg-gray-900 text-white">
            <Header />
            <section className="flex flex-col items-center p-10">
                <Profile name={user.name} />
            </section>
        </div>
    ) 
}