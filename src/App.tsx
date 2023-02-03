import React from "react";
import { GoogleSignInButton } from "./components/GoogleSignIn";
import { UserSlab } from "./components/UserSlab";
import { Navigation } from "./pages/Navigation";
import { UserIdentity } from "./components/UserIdentity";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Switch, Route } from "wouter";
import { RoomPage } from "./pages/Room";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container flex flex-col p-8 basis-full mx-auto px-4 bg-black-900 rounded-md h-1/2 min-h-[60vh]">
        <GoogleSignInButton />
        {/* <Friends /> */}

        <Switch>
          <Route path="/room" component={RoomPage}></Route>
          <Route
            path="/manage"
            component={() => (
              <>
                <UserIdentity />
                <Navigation />
              </>
            )}
          />
        </Switch>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
