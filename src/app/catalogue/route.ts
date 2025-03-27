import {
  getPublicCatalogueController,
  getSellerCatalogueController,
} from "@/domain/controllers/Product.controller";
import { withAuth } from "@/domain/middlewares/withAuth";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await getPublicCatalogueController();
  return NextResponse.json(response);
}

async function guardPOST(request: Request) {
  const { sellerId } = await request.json();
  const response = await getSellerCatalogueController(sellerId);
  return NextResponse.json(response);
}

export const POST = withAuth(guardPOST);
