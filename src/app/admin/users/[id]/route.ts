import {
  deleteUserController,
  getSingleUserController,
} from "@/domain/controllers/User.controller";
import { withAuth } from "@/domain/middlewares/withAuth";
import { NextRequest, NextResponse } from "next/server";

async function guardGET(
  request: NextRequest,
  { params }: { params: Promise<{ id: number }> }
) {
  const { id } = await params;
  const response = await getSingleUserController(id);
  return NextResponse.json(response);
}

async function guardDELETE(
  request: Request,
  { params }: { params: Promise<{ id: number }> }
) {
  const { id } = await params;
  const response = await deleteUserController(id);
  return NextResponse.json(response);
}

export const GET = withAuth(guardGET);
export const DELETE = withAuth(guardDELETE);
