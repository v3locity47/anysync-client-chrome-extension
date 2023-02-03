import { Link } from "wouter";
import { useLocation } from "wouter";

export const NavigaitonTabs = () => {
  const [location] = useLocation();
  return (
    <div className="flex text-2xl mb-14 gap-x-20">
      <Link href="/room">
        <button
          className={
            location === "/room"
              ? "text-white hover:text-white-100"
              : "text-white-700 hover:text-white-100"
          }
        >
          Room
        </button>
      </Link>
      <Link href="/manage/friends">
        <button
          className={
            location === "/friends"
              ? "text-white hover:text-white-100"
              : "text-white-700 hover:text-white-100"
          }
        >
          Friends
        </button>
      </Link>
      <Link href="manage/requests">
        <button
          className={
            location === "/requests"
              ? "text-white hover:text-white-100"
              : "text-white-700 hover:text-white-100"
          }
        >
          Requests
        </button>
      </Link>
    </div>
  );
};
