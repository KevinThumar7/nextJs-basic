// import React from 'react'

import Login from "../login/page";
import Register from "../register/page";
import { Suspense } from "react";

function Auth() {
  return (
    <div>
          <h1>Auth Components</h1>
          <Suspense fallback={<p>Login Components is loading....</p>}>
          <Login />
          </Suspense>
          <Suspense fallback={<p>Register Components is loading....</p>}>
          <Register />
          </Suspense>
    </div>
  );
}

export default Auth