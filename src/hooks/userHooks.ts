import { HttpClient } from "../config/httpClient";
import { useQuery } from "@tanstack/react-query";

export const useGetUserProfile = () =>
  useQuery({
    queryKey: ["user-profile"],
    queryFn: async () => {
      const user = await HttpClient.get("/users/current");
      return user.data;
    },
  });
