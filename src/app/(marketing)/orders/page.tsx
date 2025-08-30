// import React from 'react'
"use client";
import { useRouter } from "next/navigation";

function Orders() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div>
      <h1>Orders</h1>
      <button onClick={handleClick}>Click to Place Order</button>
    </div>
  );
}

export default Orders;
