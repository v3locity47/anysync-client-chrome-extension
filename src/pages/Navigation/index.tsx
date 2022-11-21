import { NavigaitonTabs } from "./NavigationTabs";
import { RoomPage } from "../Room";
import { FriendsPage } from "../Friends";
import { Switch, Route } from "wouter";

export const Navigation = () => {
  return (
    <div className="container grow flex flex-col margin-8 content-start items-center bg-black-800 rounded-md p-6">
      <NavigaitonTabs />
      <Switch>
        <Route path="/room" component={RoomPage}></Route>
        <Route path="/friends" component={FriendsPage}></Route>
      </Switch>
    </div>
  );
};
