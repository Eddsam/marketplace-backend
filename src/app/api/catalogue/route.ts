import { ProductRepositoryImpl } from "@/data/repositories/product.service";
import { ProductControllerImpl } from "@/domain/controllers/Product.controller";
import { withAuth } from "@/domain/middlewares/withAuth";
import { NextResponse } from "next/server";

const controller = new ProductControllerImpl(new ProductRepositoryImpl());

export async function GET() {
  const response = await controller.getAll();
  return NextResponse.json(response);
}

async function guardPOST(request: Request) {
  const { sellerId } = await request.json();
  const response = await controller.getSellerCatalogue(sellerId);
  return NextResponse.json(response);
}

export const POST = withAuth(guardPOST);
