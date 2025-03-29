import { AuthRepositoryImpl } from "@/data/repositories/auth.service";
import { AuthControllerImpl } from "@/domain/controllers/Auth.controller";
import { ISuccess } from "@/domain/interfaces/BaseResponse";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const controller = new AuthControllerImpl(new AuthRepositoryImpl());

export async function GET() {
  const store = await cookies();
  store.delete("token");
  return NextResponse.json({
    status: true,
    message: "Logged out successfully",
  });
}

export async function POST(request: Request) {
  const { username, password } = await request.json();
  const response = await controller.login(username, password);
  if (response.status === false) {
    return NextResponse.json(response);
  }
  const store = await cookies();
  store.set("token", (response as ISuccess<string>).data); // , { httpOnly: true }
  return NextResponse.json(response);
}
