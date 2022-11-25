import { UserSlab } from "../../components/UserSlab";
import { WatchIcon } from "../../components/icons";
import { useGetUserProfile } from "../../hooks/userHooks";
import { useQueryClient } from "@tanstack/react-query";

export const FriendsPage = () => {
  const { data: userData } = useGetUserProfile();
  const arr = [
    {
      Icon: WatchIcon,
      handler: () => {
        console.log("Hi");
      },
    },
  ];
  return (
    <div className="flex flex-col">
      <UserSlab iconsWithHandlers={arr} />
      <UserSlab iconsWithHandlers={arr} />
      <UserSlab iconsWithHandlers={arr} />
    </div>
  );
};
