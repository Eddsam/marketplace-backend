export type IBaseResponse<T> = ISuccess<T> | IError;

export interface ISuccess<T> {
  status: boolean;
  data: T;
}

export interface IError {
  status: boolean;
  message: string;
}
