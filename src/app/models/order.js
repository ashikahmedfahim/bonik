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
      values: ["1", "2", "3"],
      allowNull: false,
    },
  },
  {
    tableName: "orders",
    schema: "general",
    timestamps: false,
  }
);

// const createTable = async () => {
//   try {
//     await sequelize.sync({ alter: true });
//   } catch (error) {
//     console.log(error);
//   }
// };

// createTable();

module.exports = Order;
