import React, { FunctionComponent } from "react";
import img1 from "../../public/22.jpg";
import { HttpClient } from "../config/httpClient";
import { IUser } from "../interfaces/userInterface";
import { ButtonWithIcon } from "./ButtonIconWrapper";

type ButtonIconsWithHandlers = {
  Icon: FunctionComponent;
  handler: () => void;
};
interface Props {
  iconsWithHandlers: Array<ButtonIconsWithHandlers>;
  userData: IUser;
}

const data = {
  imageUrl: img1,
  username: "LazyPeacock25",
  name: "Sahil Sharma",
};

export const UserSlab = ({ iconsWithHandlers, userData }: Props) => {
  return (
    <div className="flex flex-row p-2 m-1 duration-300 rounded-full grow hover:bg-black-500">
      <img className="rounded-full w-14 h-14" src={data.imageUrl} />
      <div className="flex self-center mx-3.5">
        <span className="text-xl text-white self-baseline">
          {data.username}
        </span>
        <span className="ml-2 text-xs self-baseline text-white-700">
          {data.name}
        </span>

        <span className="flex ml-14 place-self-center">
          {iconsWithHandlers.map(({ Icon, handler }) => {
            return (
              <button className="mr-2" onClick={handler}>
                <Icon />
              </button>
            );
          })}
        </span>
      </div>
    </div>
  );
};
