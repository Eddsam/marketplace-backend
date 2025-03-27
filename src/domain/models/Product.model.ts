import { sequelize } from "@/infrastructure/sequelize/config/sequelize.config";
import { DataTypes, Model } from "sequelize";

type ProductAttributes = {
  id: number;
  code: string;
  name: string;
  price: number;
  userId: number;
};

export class Product
  extends Model<ProductAttributes>
  implements ProductAttributes
{
  id!: number;
  code!: string;
  name!: string;
  price!: number;
  userId!: number;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "product",
    freezeTableName: true,
    timestamps: false,
  }
);
