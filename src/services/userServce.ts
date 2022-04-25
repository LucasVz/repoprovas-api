import { users } from "@prisma/client";
import userRepository from "../repositories/userRepository.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";

export type CreateUserData = Omit<users, "id">;
  async function createUser(createUserData: CreateUserData) {
  const existingUser = await userRepository.findByEmail(createUserData.email);
  if (existingUser)
  throw { type: "conflict", message: "email já existente" };
  const hashedPassword = bcrypt.hashSync(createUserData.password, 10);
  await userRepository.insert({...createUserData, password: hashedPassword});
}

async function login(createUserData: CreateUserData) {
  const user = await userRepository.findByEmail(createUserData.email);
  if(!bcrypt.compareSync(createUserData.password,user.password) || !user){
    throw { type: "auth error", message: "autenticação incorreta" };
  }
  const token = jwt.sign({ userId: user.id }, "test");
  return (token)
}

export{
  createUser,
  login
}