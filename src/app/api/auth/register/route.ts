import { AuthRepositoryImpl } from "@/data/repositories/auth.service";
import { AuthControllerImpl } from "@/domain/controllers/Auth.controller";
import { NextResponse } from "next/server";

const controller = new AuthControllerImpl(new AuthRepositoryImpl());

export async function POST(request: Request) {
  const { username, password } = await request.json();
  const response = await controller.register(username, password);

  return NextResponse.json(response);
}
