import { NavigaitonTabs } from "./NavigationTabs";
import { RoomPage } from "../Room";
import { FriendsPage } from "../Friends";
import { Switch, Route } from "wouter";
import { RequestsPage } from "../Requests";
export const Navigation = () => {
  return (
    <div className="container flex flex-col items-center content-start p-6 mt-4 rounded-md grow margin-8 bg-black-800">
      <NavigaitonTabs />
      <Switch>
        <Route path="/manage/friends" component={FriendsPage}></Route>
        <Route path="/manage/requests" component={RequestsPage}></Route>
      </Switch>
    </div>
  );
};
