import { ProductRepositoryImpl } from "@/data/repositories/product.service";
import { IBaseResponse } from "../interfaces/BaseResponse";
import { IProduct } from "../interfaces/Product.interface";
import { IProductController } from "../interfaces/controller/ProductController";

export class ProductControllerImpl implements IProductController {
  repository: ProductRepositoryImpl;

  constructor(repository: ProductRepositoryImpl) {
    this.repository = repository;
  }

  async getAll(): Promise<IBaseResponse<IProduct[]>> {
    try {
      const products = await this.repository.getAll();
      return { status: true, data: products };
    } catch (error: any) {
      return { status: false, message: error.message };
    }
  }

  async getById(id: number): Promise<IBaseResponse<IProduct>> {
    try {
      const product = await this.repository.getById(id);
      if (!product) {
        return { status: false, message: "Product not found" };
      }
      return { status: true, data: product };
    } catch (error: any) {
      return { status: false, message: error.message };
    }
  }

  async create(params: IProduct): Promise<IBaseResponse<IProduct>> {
    try {
      const createdProduct = await this.repository.create(params);
      return { status: true, data: createdProduct };
    } catch (error: any) {
      return { status: false, message: error.message };
    }
  }

  async update(params: IProduct): Promise<IBaseResponse<IProduct>> {
    try {
      const updatedProduct = await this.repository.update(params);
      if (!updatedProduct) {
        return { status: false, message: "Product not found or update failed" };
      }
      return { status: true, data: updatedProduct };
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

  async getSellerCatalogue(
    sellerId: number
  ): Promise<IBaseResponse<IProduct[]>> {
    try {
      const product = await this.repository.getSellerCatalogue(sellerId);
      return { status: true, data: product };
    } catch (error: any) {
      return { status: false, message: error.message };
    }
  }
}
