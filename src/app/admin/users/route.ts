import {
  createUserController,
  getUsersController,
  updateUserController,
} from "@/domain/controllers/User.controller";
import { withAuth } from "@/domain/middlewares/withAuth";
import { NextResponse } from "next/server";

async function guardGET() {
  const response = await getUsersController();
  return NextResponse.json(response);
}
async function guardPOST(request: Request) {
  const model = await request.json();
  const response = await createUserController(model);
  return NextResponse.json(response);
}
async function guardPUT(request: Request) {
  const model = await request.json();
  const response = await updateUserController(model);
  return NextResponse.json(response);
}

export const GET = withAuth(guardGET);
export const POST = withAuth(guardPOST);
export const PUT = withAuth(guardPUT);
