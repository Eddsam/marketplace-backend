import {
  createProductController,
  getProductsController,
  updateProductController,
} from "@/domain/controllers/Product.controller";
import { withAuth } from "@/domain/middlewares/withAuth";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await getProductsController();
  return NextResponse.json(response);
}
async function guardPOST(request: Request) {
  const model = await request.json();
  const response = await createProductController(model);
  return NextResponse.json(response);
}
async function guardPUT(request: Request) {
  const model = await request.json();
  const response = await updateProductController(model);
  return NextResponse.json(response);
}

export const POST = withAuth(guardPOST);
export const PUT = withAuth(guardPUT);
