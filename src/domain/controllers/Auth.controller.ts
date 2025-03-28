import { SECRET } from "@/data/dotenv";
//@ts-ignore
import jwt from "jsonwebtoken";
import { IAuthController } from "../interfaces/controller/AuthController";
import { IBaseResponse } from "../interfaces/BaseResponse";
import { AuthRepositoryImpl } from "@/data/repositories/auth.service";

export class AuthControllerImpl implements IAuthController {
  repository: AuthRepositoryImpl;

  constructor(repository: AuthRepositoryImpl) {
    this.repository = repository;
  }

  async login(
    username: string,
    password: string
  ): Promise<IBaseResponse<string>> {
    try {
      const data = await this.repository.login(username, password);
      if (!data) {
        return { status: false, message: "Usuario inválido" };
      }
      const token = jwt.sign({ username }, SECRET, { expiresIn: "2h" });
      return { status: true, data: token };
    } catch (e: any) {
      return { status: false, message: e.message };
    }
  }
}
