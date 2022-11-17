import React from "react";
import { GoogleSignInButton } from "./components/GoogleSignIn";
import { UserSlab } from "./components/UserSlab";
function App() {
  return (
    <div className="container items-center justify-center basis-full mx-auto px-4 bg-black-900 rounded-md flex h-1/2 min-h-[60vh]">
      {/* <GoogleSignInButton /> */}
      <UserSlab />
    </div>
  );
}

export default App;
