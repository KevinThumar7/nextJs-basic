// import React from 'react'
"use client"

import { useState } from "react"

function Counter() {

    const [increase , setIncrease] = useState(0)

  return (
    <div>
        <h1>Counter Game</h1>
        <input type="number" readOnly value={increase} />
        <br />
        <button onClick={()=>setIncrease(increase+1)}>Increase Value</button>
    </div>
  )
}

export default Counter