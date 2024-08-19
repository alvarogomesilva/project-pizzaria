import { UserRequest } from "../../types/User"

export const CreateUserService = ({ name, email, password }: UserRequest) => {
    return { name, email, password }
}