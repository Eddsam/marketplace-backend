import { IBaseResponse } from "../BaseResponse";
import { IProduct } from "../Product.interface";
import { IBaseController } from "./BaseController";

export interface IProductController extends IBaseController<IProduct> {
  getSellerCatalogue(sellerId: number): Promise<IBaseResponse<IProduct[]>>;
}
