import { Product } from "@/domain/models/Product.model";
import { User } from "@/domain/models/User.model";
import { UserType } from "@/domain/models/UserType.model";
//@ts-ignore
import bcrypt from "bcrypt";

export async function getUsers() {
  return User.findAll({
    include: [
      { model: UserType, attributes: { exclude: ["id"] } },
      { model: Product, attributes: { exclude: ["userId"] } },
    ],
  });
}

export async function getSingleUsers(id: number) {
  const resp = await User.findByPk(id);
  if (!resp) {
    throw new Error("Usuario no encontrado");
  }
  return resp;
}

export async function createUser(user: User) {
  try {
    return await User.create(user);
  } catch (e) {
    throw new Error("No se ha podido guardar el usuario");
  }
}

export async function updateUser(user: User) {
  try {
    return await User.update(user, { where: { id: user.id } });
  } catch (e) {
    throw new Error("No se ha podido guardar el usuario");
  }
}

export async function deleteUser(userId: number) {
  const resp = await User.destroy({ where: { id: userId } });
  if (resp === 0) {
    throw new Error("No se ha podido eliminar el usuario");
  }
  return resp;
}

export async function getSigninUser(username: string, password: string) {
  const resp = await User.findOne({ where: { username } });
  if (!resp) {
    throw new Error("Usuario no encontrado");
  }
  if (!bcrypt.compare(password, resp.password)) {
    throw new Error("Contraseña incorrecta");
  }

  return resp;
}
