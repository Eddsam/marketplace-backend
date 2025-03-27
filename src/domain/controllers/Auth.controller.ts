import { SECRET } from "@/data/dotenv";
import { getSigninUser } from "@/data/services/user.service";
//@ts-ignore
import jwt from "jsonwebtoken";

export async function singinUser(username: string, password: string) {
  try {
    const data = await getSigninUser(username, password);
    if (data) {
      const data = jwt.sign({ username }, SECRET, { expiresIn: "2h" });
      return { status: true, data };
    }

    return { status: false, data: "Usuario inválido" };
  } catch (e: any) {
    return { status: false, message: e.message };
  }
}
