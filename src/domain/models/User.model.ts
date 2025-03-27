import { sequelize } from "@/infrastructure/sequelize/config/sequelize.config";
import { DataTypes, Model } from "sequelize";
import { UserType } from "./UserType.model";
import { Product } from "./Product.model";

type UserAttributes = {
  id: number;
  username: string;
  password: string;
  userTypeId: number;
};

export class User extends Model<UserAttributes> implements UserAttributes {
  id!: number;
  username!: string;
  password!: string;
  userTypeId!: number;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "user",
    freezeTableName: true,
    timestamps: false,
  }
);

User.belongsTo(UserType);

User.hasMany(Product);
Product.belongsTo(User);
