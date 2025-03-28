import { IBaseRepository } from "./BaseRepository";
import { IUser } from "../User.interface";

export interface IUserRepository extends IBaseRepository<IUser> {}
