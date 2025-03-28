import { IBaseResponse } from "../BaseResponse";
import { IBaseRepository } from "../repository/BaseRepository";

export interface IBaseController<T> {
  repository: IBaseRepository<T>;
  getAll(): Promise<IBaseResponse<Array<T>>>;
  getById(id: number): Promise<IBaseResponse<T>>;
  create(params: T): Promise<IBaseResponse<T>>;
  update(params: T): Promise<IBaseResponse<T>>;
  delete(id: number): Promise<void>;
}
