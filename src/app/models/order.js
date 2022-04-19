const sequelize = require("../../config/config").sequelize;
const { DataTypes } = require("sequelize");

const Order = sequelize.define(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ['1', '2', '3'],
      allowNull: false,
    },
  },
  {
    tableName: "orders",
    schema: "general",
    timestamps: false,
  }
);

module.exports = Order;
