"use client"

// import React from 'react'
import { usePathname } from "next/navigation";

function NotFound() {

  const pathName = usePathname()
  const productId = pathName.split("/")[2]
  const reviewId = pathName.split("/")[4]

  return (
    <div>
      <h1>Review not found for {reviewId} of product {productId}</h1>
    </div>
  );
}

export default NotFound