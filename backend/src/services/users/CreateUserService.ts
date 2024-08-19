import { hashSync } from "bcryptjs"
import { Prisma } from "../../config/prisma"
import { UserRequest } from "../../types/User"

export const CreateUserService = async ({ name, email, password }: UserRequest) => {

    if (!name) return { messageError: 'Name is required!' }
    if (!email) return { messageError: 'Email is required!' }
    if (!password) return { messageError: 'Password is required!' }

    const userAlredyExists = await Prisma.user.findFirst({
        where: { email }
    })
    if (userAlredyExists) return { messageError: 'User alredy exists!' }

    const passwordHash = hashSync(password, 8)

    const users = await Prisma.user.create({
        data: { name, email, password: passwordHash },
        select: { id: true, name: true, email: true, password: false, created_at: false, updated_at: false }
    })

    return users
}