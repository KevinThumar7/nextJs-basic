// import React from 'react'

import { notFound, redirect } from "next/navigation";

async function Review({
  params,
}: {
  params: Promise<{ productid: string; reviewid: string }>;
}) {
  const idRe = (await params).reviewid;
  const idPr = (await params).productid;

  if (parseInt(idRe || idPr) > 1000) {
    // notFound();
    redirect("/");
  }

  return (
    <div>
      <h1>Reviews</h1>
      <h3>
        Review no {idRe} of Product no {idPr}
      </h3>
    </div>
  );
}

export default Review;
