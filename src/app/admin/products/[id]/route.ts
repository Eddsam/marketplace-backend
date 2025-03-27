import {
  deleteProductController,
  getSingleProductsController,
} from "@/domain/controllers/Product.controller";
import { withAuth } from "@/domain/middlewares/withAuth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: number }> }
) {
  const { id } = await params;
  const response = await getSingleProductsController(id);
  return NextResponse.json(response);
}

async function guardDELETE(
  request: Request,
  { params }: { params: Promise<{ id: number }> }
) {
  const { id } = await params;
  const response = await deleteProductController(id);
  return NextResponse.json(response);
}

export const DELETE = withAuth(guardDELETE);
