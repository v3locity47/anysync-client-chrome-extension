import { UserSlab } from "../../components/UserSlab";
import { CrossIcon, GreenTick } from "../../components/icons";
export const RequestsPage = () => {
  const arr = [
    {
      Icon: GreenTick,
      handler: () => {
        console.log("Hi");
      },
    },
    {
      Icon: CrossIcon,
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
