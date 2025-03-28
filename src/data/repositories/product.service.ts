import { IProduct } from "@/domain/interfaces/Product.interface";
import { IProductRepository } from "@/domain/interfaces/repository/ProductRepository";
import { createClient } from "@/infrastructure/supabase/server";

export class ProductRepositoryImpl implements IProductRepository {
  async getAll(): Promise<IProduct[]> {
    const supabase = await createClient();
    const { data, error } = await supabase.from("product").select();
    if (error) {
      throw new Error("Error fetching products: " + error.message);
    }
    return data as IProduct[];
  }

  async getById(id: number): Promise<IProduct> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("product")
      .select()
      .eq("id", id)
      .single();
    if (error) {
      throw new Error("Error fetching product by ID: " + error.message);
    }
    if (!data) {
      throw new Error("Product not found");
    }
    return data as IProduct;
  }

  async create(params: IProduct): Promise<IProduct> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("product")
      .insert(params)
      .single();
    if (error) {
      throw new Error("Error creating product: " + error.message);
    }
    return data as IProduct;
  }

  async update(params: IProduct): Promise<IProduct> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("product")
      .update(params)
      .eq("id", params.id)
      .single();
    if (error) {
      throw new Error("Error updating product: " + error.message);
    }
    return data as IProduct;
  }

  async delete(id: number): Promise<void> {
    const supabase = await createClient();
    const { error } = await supabase.from("product").delete().eq("id", id);
    if (error) {
      throw new Error("Error deleting product: " + error.message);
    }
  }

  async getSellerCatalogue(sellerId: number): Promise<IProduct[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("product")
      .select()
      .eq("userId", sellerId);
    if (error) {
      throw new Error("Error fetching products: " + error.message);
    }
    return data as IProduct[];
  }
}
