"use client"
import { useState } from "react"


const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    async function register(e) {
        e.preventDefault();
         const res =   await fetch('http://localhost:3001/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            })

        if(res.status === 200) {
            alert('registration successful')
        } else {
            alert('registration failed')
        }


    }
  return (
    <>
    <div className="flex items-center justify-center h-screen">
  <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
    <h2 className="text-2xl font-bold mb-4">Register</h2>
    <form onSubmit={register}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">username</label>
        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="your name" onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="your@email.com" onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Register</button>
      </div>
    </form>
  </div>
</div>
</>
  )
}

export default Register
