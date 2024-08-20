import { compareSync } from "bcryptjs";
import { Prisma } from "../../config/prisma";
import { AuthRequest } from "../../types/User";

export const AuthUserService = async ({email, password}: AuthRequest) => {

    const userExists = await Prisma.user.findFirst({
        where: { email: email }
    })

    if (!userExists) return { messageError: 'Email/password incorrect!' }

    const passwordMatch = compareSync(password, userExists.password)

    if (!passwordMatch) return { messageError: 'Email/password incorrect!' }


    return { ok: true }
}