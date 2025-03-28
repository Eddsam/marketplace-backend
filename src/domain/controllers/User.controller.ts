import { IUsercontroller } from "../interfaces/controller/UserController";
import { IBaseResponse } from "../interfaces/BaseResponse";
import { IUser } from "../interfaces/User.interface";
import { IUserRepository } from "../interfaces/repository/UserRepository";

export class UserControllerImpl implements IUsercontroller {
  repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  async getAll(): Promise<IBaseResponse<IUser[]>> {
    try {
      const users = await this.repository.getAll();
      return { status: true, data: users };
    } catch (error: any) {
      return { status: false, message: error.message };
    }
  }

  async getById(id: number): Promise<IBaseResponse<IUser>> {
    try {
      const user = await this.repository.getById(id);
      if (!user) {
        return { status: false, message: "User not found" };
      }
      return { status: true, data: user };
    } catch (error: any) {
      return { status: false, message: error.message };
    }
  }

  async create(params: IUser): Promise<IBaseResponse<IUser>> {
    try {
      const newUser = await this.repository.create(params);
      return { status: true, data: newUser };
    } catch (error: any) {
      return { status: false, message: error.message };
    }
  }

  async update(params: IUser): Promise<IBaseResponse<IUser>> {
    try {
      const updatedUser = await this.repository.update(params);
      return { status: true, data: updatedUser };
    } catch (error: any) {
      return { status: false, message: error.message };
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.repository.delete(id);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
