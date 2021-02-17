import Adapters from "next-auth/adapters"

// Extend the built-in models using class inheritance
export default class User extends Adapters.TypeORM.Models.User.model {
  // You can extend the options in a model but you should not remove the base
  // properties or change the order of the built-in options on the constructor
  constructor(name, email, image, emailVerified, erctwenty) {
    super(name, email, image, emailVerified, erctwenty)
  }
}

export const UserSchema = {
  target: User,
  columns: {
    ...Adapters.TypeORM.Models.User.schema.columns,
    // Adds a ERC20 address to the User schema
    erctwenty: {
      type: "varchar",
      nullable: true,
    },
  },
}