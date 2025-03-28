import { ProductRepositoryImpl } from "@/data/repositories/product.service";
import { ProductControllerImpl } from "@/domain/controllers/Product.controller";
import { withAuth } from "@/domain/middlewares/withAuth";
import { NextResponse } from "next/server";

const controller = new ProductControllerImpl(new ProductRepositoryImpl());

async function guardGET() {
  const response = await controller.getAll();
  return NextResponse.json(response);
}
async function guardPOST(request: Request) {
  const model = await request.json();
  const response = await controller.create(model);
  return NextResponse.json(response);
}
async function guardPUT(request: Request) {
  const model = await request.json();
  const response = await controller.update(model);
  return NextResponse.json(response);
}

export const GET = withAuth(guardGET);
export const POST = withAuth(guardPOST);
export const PUT = withAuth(guardPUT);
