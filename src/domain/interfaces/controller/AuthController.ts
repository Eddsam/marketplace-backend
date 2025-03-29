import { IBaseResponse } from "../BaseResponse";
import { IAuthRepository } from "../repository/AuthRepository";
import { IUser } from "../User.interface";

export interface IAuthController {
  repository: IAuthRepository;
  login(username: string, password: string): Promise<IBaseResponse<string>>;
  register(username: string, password: string): Promise<IBaseResponse<IUser>>;
}
