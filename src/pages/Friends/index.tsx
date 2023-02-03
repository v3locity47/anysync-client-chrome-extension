import { UserSlab } from "../../components/UserSlab";
import { WatchIcon } from "../../components/icons";
import { socket } from "../../config/socketClient";
import { useGetUserProfile } from "../../hooks/userHooks";

export const FriendsPage = () => {
  const { isSuccess, data: userData } = useGetUserProfile();
  const arr = [
    {
      Icon: WatchIcon,
      handler: () => {
        socket.emit("room:send-invite", userData._id);
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
