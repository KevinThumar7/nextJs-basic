// import React from "react";

async function page({ params }: { params: Promise<{ productid: string }> }) {
  const id = (await params).productid;
  return (
    <div>
      <h1>Product is {id}</h1>
    </div>
  );
}

export default page;
