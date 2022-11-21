import { UserSlab } from "../../components/UserSlab";
import { WatchIcon } from "../../components/icons";

export const FriendsPage = () => {
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
    </div>
  );
};
