import { Product } from "@/domain/models/Product.model";
import { User } from "@/domain/models/User.model";

export async function getProducts() {
  return Product.findAll({
    include: { model: User, attributes: { exclude: ["password"] } },
  });
}

export async function getSingleProducts(id: number) {
  const resp = await Product.findByPk(id);
  if (!resp) {
    throw new Error("Producto no encontrado");
  }
  return resp;
}

export async function createProduct(product: Product) {
  try {
    return await Product.create(product);
  } catch (e) {
    throw new Error("No se ha podido guardar el producto");
  }
}

export async function updateProduct(product: Product) {
  try {
    return await Product.update(product, { where: { id: product.id } });
  } catch (e) {
    throw new Error("No se ha podido guardar el producto");
  }
}

export async function deleteProduct(productId: number) {
  const resp = await Product.destroy({ where: { id: productId } });
  if (resp === 0) {
    throw new Error("No se ha podido eliminar el producto");
  }
  return resp;
}

export async function getPublicCatalogue() {
  return Product.findAll();
}

export async function getSellerCatalogue(sellerId: number) {
  return Product.findAll({ where: { userId: sellerId } });
}
