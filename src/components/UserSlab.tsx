import React, { FunctionComponent } from "react";
import img1 from "../../public/22.jpg";
import { HttpClient } from "../config/httpClient";
import { ButtonWithIcon } from "./ButtonIconWrapper";

type icons = {
  Icon: FunctionComponent;
  handler: () => void;
};
interface Props {
  iconsWithHandlers: Array<icons>;
}

const data = {
  imageUrl: img1,
  username: "LazyPeacock25",
  name: "Sahil Sharma",
};

export const UserSlab = ({ iconsWithHandlers }: Props) => {
  return (
    <div className="grow flex flex-row border m-1 p-2 rounded-full">
      <img
        className="rounded-full h-16 w-16 bg-black-900"
        src={data.imageUrl}
      />
      <div className="self-center mx-3.5">
        <span className="text-2xl self-baseline text-white">
          {data.username}
        </span>
        <span className="text-xs self-baseline ml-2 text-white-700">
          {data.name}
        </span>

        <span className="ml-16">
          {iconsWithHandlers.map(({ Icon, handler }) => {
            return (
              <button className="mx-1" onClick={handler}>
                <Icon />
              </button>
            );
          })}
        </span>
      </div>
    </div>
  );
};
