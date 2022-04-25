import { prisma } from "../../database.js";
import { CreateUserData } from "../services/userServce.js"

async function insert(createUserData: CreateUserData) {

    await prisma.users.create({
      data: createUserData
    });
  }

  
async function findByEmail(email: string){
  return prisma.users.findUnique({
    where: {
      email,
    },
  });
}

export default {
  insert,
  findByEmail
};