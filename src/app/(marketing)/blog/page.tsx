// import React from 'react'

async function Blog() {

  await new Promise((res)=>{setTimeout(() => {res("Intentional delay")}, 2000)})

  // setTimeout(()=>{},2000)  XXXXXX

  return (
      <div>
          <h1>Blog Page</h1>
    </div>
  )
}

export default Blog