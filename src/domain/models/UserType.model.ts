import { sequelize } from "@/infrastructure/sequelize/config/sequelize.config";
import { DataTypes, Model } from "sequelize";

type UserTypeAttributes = {
  id: number;
  rolname: string;
};

export class UserType
  extends Model<UserTypeAttributes>
  implements UserTypeAttributes
{
  id!: number;
  rolname!: string;
}

UserType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    rolname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "user_type",
    freezeTableName: true,
    timestamps: false,
  }
);
