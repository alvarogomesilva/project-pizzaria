import { compareSync } from "bcryptjs";
import { Prisma } from "../../config/prisma";
import { AuthRequest } from "../../types/User";
import { sign } from "jsonwebtoken";

export const AuthUserService = async ({email, password}: AuthRequest) => {

    const user = await Prisma.user.findFirst({
        where: { email: email }
    })

    if (!user) return { messageError: 'Email/password incorrect!' }

    const passwordMatch = compareSync(password, user.password)

    if (!passwordMatch) return { messageError: 'Email/password incorrect!' }

    const token = sign({ name: user.name, email: user.email }, process.env.JWT_SECRET, {
        subject: user.id,
        expiresIn: '30d'
    })

    return { id: user.id, name: user.name, email: user.email, token: token }
}