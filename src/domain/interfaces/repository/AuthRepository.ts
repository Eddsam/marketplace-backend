import { IUser } from "../User.interface";

export interface IAuthRepository {
  register(username: string, password: string): Promise<IUser>;
  login(email: string, password: string): Promise<IUser>;
  logout(): Promise<void>;
}
