import User, { UserSchema } from "./User"

export default {
  users: {
    model: User,
    schema: UserSchema,
  },
}