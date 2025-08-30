import { Metadata } from "next";

type Props = {
  params: { productid: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = params.productid;
  return {
    title: `Product ${id}`,
  };
};

async function Page({ params }: { params: { productid: string } }) {
  const id = params.productid;

  return (
    <div>
      <h1>Product is {id}</h1>
    </div>
  );
}

export default Page;

// import React from "react";
//  import { Metadata } from "next";
//  type Props = { params: Promise<{ productid: string }>; };
//  export const generateMetaData = async ({ params, }: Props): Promise<Metadata> => {
// const id = (await params).productid; console.log(id); return { title: Product ${id}, };
// };
// async function page({ params }: { params: Promise<{ productid: string }> }) {
// const id = (await params).productid;
// return ( <div> <h1>Product is {id}</h1> </div> );
// }
// export default page;
