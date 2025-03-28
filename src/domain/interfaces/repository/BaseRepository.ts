export interface IBaseRepository<T> {
  getAll(): Promise<Array<T>>;
  getById(id: number): Promise<T>;
  create(params: T): Promise<T>;
  update(params: T): Promise<T>;
  delete(id: number): Promise<void>;
}
