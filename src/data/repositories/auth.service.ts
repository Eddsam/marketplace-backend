import { IAuthRepository } from "@/domain/interfaces/repository/AuthRepository";
import { IUser } from "@/domain/interfaces/User.interface";
import { createClient } from "@/infrastructure/supabase/server";
//@ts-ignore
import bcrypt from "bcrypt";

export class AuthRepositoryImpl implements IAuthRepository {
  async register(user: IUser): Promise<IUser> {
    // Implement registration logic here
    return user; // Placeholder return
  }

  async login(username: string, password: string): Promise<IUser> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("user")
      .select()
      .eq("username", username)
      .single();
    if (error) {
      throw new Error("Error fetching username: " + error.message);
    }
    if (!data) {
      throw new Error("username is not registered");
    }
    if (!bcrypt.compare(password, data.password)) {
      throw new Error("Contraseña incorrecta");
    }
    return data;
  }

  async logout(): Promise<void> {
    // Implement logout logic here
  }
}
