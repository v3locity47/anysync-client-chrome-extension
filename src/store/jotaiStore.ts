import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const currentNavigation = atom("room");
export const userProfile = atomWithStorage("user-profile", {});
