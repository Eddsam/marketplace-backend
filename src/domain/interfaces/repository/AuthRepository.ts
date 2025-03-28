import { IUser } from "../User.interface";

export interface IAuthRepository {
  register(user: IUser): Promise<IUser>;
  login(email: string, password: string): Promise<IUser>;
  logout(): Promise<void>;
}
