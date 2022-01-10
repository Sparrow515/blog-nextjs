import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import Silence from 'pages/silence'

const prisma = new PrismaClient()

async function main() {
  const name = 'sparrow'
  const password = 'silence'
  const saltRounds = 10 //生成salt的迭代次数
  const salt = bcrypt.genSaltSync(saltRounds) //随机生成salt
  const pwdHash = bcrypt.hashSync(password, salt)
  const sparrow = await prisma.adminUser.upsert({
    where: { username: `${name}-admin` },
    update: {},
    create: {
      username: `${name}-admin`,
      password: pwdHash,
      name: name
    }
  })
  console.log({ sparrow })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
