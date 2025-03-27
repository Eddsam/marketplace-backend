import {
  createProduct,
  deleteProduct,
  getProducts,
  getPublicCatalogue,
  getSellerCatalogue,
  getSingleProducts,
  updateProduct,
} from "@/data/services/product.service";
import { Product } from "../models/Product.model";

export async function getProductsController() {
  try {
    const data = await getProducts();
    return { status: true, data: data };
  } catch (e: any) {
    return { status: false, message: e.message };
  }
}

export async function getSingleProductsController(id: number) {
  try {
    const data = await getSingleProducts(id);
    return { status: true, data: data };
  } catch (e: any) {
    return { status: false, message: e.message };
  }
}

export async function createProductController(product: Product) {
  try {
    const data = await createProduct(product);
    return { status: true, data: data };
  } catch (e: any) {
    return { status: false, message: e.message };
  }
}

export async function updateProductController(product: Product) {
  try {
    await updateProduct(product);
    return { status: true, data: "Se ha actualizado correctamente" };
  } catch (e: any) {
    return { status: false, message: e.message };
  }
}

export async function deleteProductController(productId: number) {
  try {
    await deleteProduct(productId);
    return { status: true, data: "Se ha eliminado correctamente" };
  } catch (e: any) {
    return { status: false, message: e.message };
  }
}

export async function getPublicCatalogueController() {
  try {
    const data = await getPublicCatalogue();
    return { status: true, data: data };
  } catch (e: any) {
    return { status: false, message: e.message };
  }
}

export async function getSellerCatalogueController(sellerId: number) {
  try {
    const data = await getSellerCatalogue(sellerId);
    return { status: true, data: data };
  } catch (e: any) {
    return { status: false, message: e.message };
  }
}
