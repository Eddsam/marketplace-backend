import { IBaseResponse } from "../BaseResponse";
import { IAuthRepository } from "../repository/AuthRepository";

export interface IAuthController {
  repository: IAuthRepository;
  login(username: string, password: string): Promise<IBaseResponse<string>>;
}
