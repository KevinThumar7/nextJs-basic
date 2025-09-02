// import React from 'react'

export const metadata = {
  title: "Login Page"
}

async function Login() {

  await new Promise((resolve)=>setTimeout(resolve,4000))

  return (
    <div>Login</div>
  )
}

export default Login