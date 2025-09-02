// import React from 'react'

export const metadata = {
  title: "Register Page"
}

async function Register() {

  await new Promise((resolve)=>setTimeout(resolve,4000))

  return (
    <div>Register</div>
  )
}

export default Register