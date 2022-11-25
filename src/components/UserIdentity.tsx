import { useAtom } from "jotai";
import img1 from "../../public/22.jpg";
import { useGetUserProfile } from "../hooks/userHooks";
import { userProfile } from "../store/jotaiStore";

const data = {
  avatar: img1,
  username: "ASDFSAF",
};

export const UserIdentity = () => {
  const { isSuccess, data: userData } = useGetUserProfile();
  return (
    <>
      {isSuccess ? (
        <div className="flex flex-row-reverse mb-2">
          <img className="rounded-full h-20 w-20 ml-3" src={data.avatar} />
          <div className="flex flex-col place-content-center">
            <span className="text-3xl text-white">{data.username}</span>
            <span className="text-xl text-white-700 place-self-end">
              {userData.firstName + " " + userData.lastName}
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
};
