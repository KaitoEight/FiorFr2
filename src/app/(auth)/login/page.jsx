"use client"
import {  useState } from "react"
import { useRouter } from "next/navigation"


const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userInfo, setUserInfo] = useState(null)
    const [redirect, setRedirect] = useState(false)

    async function login(e) {
        e.preventDefault()
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        })
        if(response.ok) {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
                setRedirect(true)
            })
        } else {
            alert('login failed')
        }
    }

    if (redirect) {
        return router.push("/")
    }
  return (
    <>
    <div className="flex items-center justify-center h-screen">
  <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
    <h2 className="text-2xl font-bold mb-4">Login</h2>
    <form onSubmit={login}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="your@email.com" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Login</button>
      </div>
    </form>
  </div>
</div>
</>
  )
}

export default Login
