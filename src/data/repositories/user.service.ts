import { IUserRepository } from "@/domain/interfaces/repository/UserRepository";
import { IUser } from "@/domain/interfaces/User.interface";
import { createClient } from "@/infrastructure/supabase/server";

export class UserRepositoryImpl implements IUserRepository {
  async getAll(): Promise<IUser[]> {
    const supabase = await createClient();
    const { data, error } = await supabase.from("user").select();
    if (error) {
      throw new Error("Error fetching users: " + error.message);
    }
    return data as IUser[];
  }

  async getById(id: number): Promise<IUser> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("user")
      .select()
      .eq("id", id)
      .single();
    if (error) {
      throw new Error("Error fetching user by ID: " + error.message);
    }
    if (!data) {
      throw new Error("User not found");
    }
    return data as IUser;
  }

  async create(params: IUser): Promise<IUser> {
    const supabase = await createClient();
    const { data, error } = await supabase.from("user").insert(params).single();
    if (error) {
      throw new Error("Error creating user: " + error.message);
    }
    return data as IUser;
  }

  async update(params: IUser): Promise<IUser> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("user")
      .update(params)
      .eq("id", params.id)
      .single();
    if (error) {
      throw new Error("Error updating user: " + error.message);
    }
    return data as IUser;
  }

  async delete(id: number): Promise<void> {
    const supabase = await createClient();
    const { error } = await supabase.from("user").delete().eq("id", id);
    if (error) {
      throw new Error("Error deleting user: " + error.message);
    }
  }
}
