import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { IInvitation } from "../interfaces/userInterface";

export const currentNavigation = atom("room");
export const userProfile = atomWithStorage("user-profile", {});
export const userInvitations = atom<IInvitation[]>([]);
