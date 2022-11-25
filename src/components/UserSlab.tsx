import React, { FunctionComponent } from "react";
import img1 from "../../public/22.jpg";
import { HttpClient } from "../config/httpClient";
import { ButtonWithIcon } from "./ButtonIconWrapper";

type ButtonIconsWithHandlers = {
  Icon: FunctionComponent;
  handler: () => void;
};
interface Props {
  iconsWithHandlers: Array<ButtonIconsWithHandlers>;
}

const data = {
  imageUrl: img1,
  username: "LazyPeacock25",
  name: "Sahil Sharma",
};

export const UserSlab = ({ iconsWithHandlers }: Props) => {
  return (
    <div className="grow flex flex-row m-1 p-2 rounded-full  hover:bg-black-500 duration-300">
      <img className="rounded-full h-16 w-16" src={data.imageUrl} />
      <div className="flex self-center mx-3.5">
        <span className="text-2xl self-baseline text-white">
          {data.username}
        </span>
        <span className="text-xs self-baseline ml-2 text-white-700">
          {data.name}
        </span>

        <span className="flex ml-16 place-self-center">
          {iconsWithHandlers.map(({ Icon, handler }) => {
            return (
              <button className="mr-1" onClick={handler}>
                <Icon />
              </button>
            );
          })}
        </span>
      </div>
    </div>
  );
};
