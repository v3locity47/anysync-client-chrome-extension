export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  _id: string;
  friends: Array<string>;
  createdAt: Date;
}

export interface IInvitation {
  fromUser: IUser;
  toUser: string;
}
