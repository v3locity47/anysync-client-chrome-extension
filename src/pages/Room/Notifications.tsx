import { socket } from "../../config/socketClient";
import { GreenTick, CrossIcon } from "../../components/icons";
import { UserSlab } from "../../components/UserSlab";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { userInvitations } from "../../store/jotaiStore";
import { IInvitation } from "../../interfaces/userInterface";

export const Notifications = () => {
  const [invitations, setInvitations] = useAtom(userInvitations);
  useEffect(() => {
    socket.on("room:invite", (invitation: IInvitation) => {
      setInvitations([...invitations, invitation]);
    });
  }, []);
  const constructButtonHandlers = (roomId: string) => [
    {
      Icon: GreenTick,
      handler: () => {
        socket.emit("room:join", roomId);
        const remainingInvitations = invitations.filter((invitation) => {
          invitation.fromUser._id != roomId;
        });
        setInvitations(remainingInvitations);
      },
    },
    {
      Icon: CrossIcon,
      handler: () => {
        const remainingInvitations = invitations.filter((invitation) => {
          invitation.fromUser._id != roomId;
        });
        setInvitations(remainingInvitations);
      },
    },
  ];

  return (
    <div className="flex flex-col">
      {invitations.map((invitation, index) => {
        console.log(invitation);
        const fromUserId = invitation.fromUser._id;
        const eventHandlers = constructButtonHandlers(fromUserId);
        return (
          <UserSlab
            key={index}
            iconsWithHandlers={eventHandlers}
            userData={invitation.fromUser}
          />
        );
      })}
    </div>
  );
};
