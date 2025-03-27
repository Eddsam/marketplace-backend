import { singinUser } from "@/domain/controllers/Auth.controller";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { username, password } = await request.json();
  const response = await singinUser(username, password);
  const store = await cookies();
  store.set("token", response.data, { httpOnly: true });
  return NextResponse.json(response);
}
