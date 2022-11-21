import React from "react";
import { GoogleSignInButton } from "./components/GoogleSignIn";
import { UserSlab } from "./components/UserSlab";
import { Navigation } from "./pages/Navigation";
import { UserIdentity } from "./components/UserIdentity";

function App() {
  return (
    <div className="container flex flex-col p-8 basis-full mx-auto px-4 bg-black-900 rounded-md h-1/2 min-h-[60vh]">
      <GoogleSignInButton />
      {/* <UserSlab /> */}
      {/* <Friends /> */}
      <UserIdentity />
      <Navigation />
    </div>
  );
}

export default App;
