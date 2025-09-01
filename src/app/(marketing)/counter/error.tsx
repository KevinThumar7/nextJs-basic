// // import React from 'react'
"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div>
      <p>{error.message}</p>
      <button onClick={() => reload()} type="button">
        Try Again
      </button>
    </div>
  );
}

export default Error;
