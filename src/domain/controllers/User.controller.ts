import {
  createUser,
  deleteUser,
  getSingleUsers,
  getUsers,
  updateUser,
} from "@/data/services/user.service";
import { User } from "../models/User.model";

export async function getUsersController() {
  try {
    const data = await getUsers();
    return { status: true, data: data };
  } catch (e: any) {
    return { status: false, message: e.message };
  }
}

export async function getSingleUserController(id: number) {
  try {
    const data = await getSingleUsers(id);
    return { status: true, data: data };
  } catch (e: any) {
    return { status: false, message: e.message };
  }
}

export async function createUserController(user: User) {
  try {
    const data = await createUser(user);
    return { status: true, data: data };
  } catch (e: any) {
    return { status: false, message: e.message };
  }
}

export async function updateUserController(user: User) {
  try {
    await updateUser(user);
    return { status: true, data: "Se ha actualizado correctamente" };
  } catch (e: any) {
    return { status: false, message: e.message };
  }
}

export async function deleteUserController(userId: number) {
  try {
    await deleteUser(userId);
    return { status: true, data: "Se ha eliminado correctamente" };
  } catch (e: any) {
    return { status: false, message: e.message };
  }
}
