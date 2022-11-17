import React from "react";
import logo from "./logo512.png";
import { HttpClient } from "../config/httpClient";

export const UserSlab = () => {
  return (
    <div className="container flex flex-row bg-white p-2 rounded-full">
      <img className="rounded-full h-10 w-10 bg-black-900" src={logo}></img>
    </div>
  );
};
