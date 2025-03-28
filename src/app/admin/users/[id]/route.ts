import { UserRepositoryImpl } from "@/data/repositories/user.service";
import { UserControllerImpl } from "@/domain/controllers/User.controller";
import { withAuth } from "@/domain/middlewares/withAuth";
import { NextRequest, NextResponse } from "next/server";

const controller = new UserControllerImpl(new UserRepositoryImpl());

async function guardGET(
  request: NextRequest,
  { params }: { params: Promise<{ id: number }> }
) {
  const { id } = await params;
  const response = await controller.getById(id);
  return NextResponse.json(response);
}

async function guardDELETE(
  request: Request,
  { params }: { params: Promise<{ id: number }> }
) {
  const { id } = await params;
  const response = await controller.delete(id);
  return NextResponse.json(response);
}

export const GET = withAuth(guardGET);
export const DELETE = withAuth(guardDELETE);
