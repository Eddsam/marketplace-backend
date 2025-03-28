import { IBaseRepository } from "./BaseRepository";
import { IProduct } from "../Product.interface";

export interface IProductRepository extends IBaseRepository<IProduct> {
  getSellerCatalogue(sellerId: number): Promise<IProduct[]>;
}
