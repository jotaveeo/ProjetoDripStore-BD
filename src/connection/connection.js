import { PrismaClient } from "@prisma/client";

class Prisma {
  static prisma = new PrismaClient();

  static connection() {
    return this.prisma ? this.prisma : (this.prisma = new PrismaClient());
  }
}

export default Prisma.connection();
