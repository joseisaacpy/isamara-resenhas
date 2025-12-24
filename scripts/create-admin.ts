import "dotenv/config";

import { prisma } from "../lib/prisma.js";
import bcrypt from "bcryptjs";

async function main() {
  // credenciais do admin
  const email = "isamaraadmin@gmail.com";
  const password = "apolo1108";
  // cria o hash
  const hashedPassword = await bcrypt.hash(password, 10);
  // cria o admin com prisma
  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });
  console.log("Admin criado com sucesso!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
