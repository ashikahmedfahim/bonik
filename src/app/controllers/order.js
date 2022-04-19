const { Op } = require("sequelize");
const Order = require("../models/order");
const sequelize = require("../../config/config").sequelize;

module.exports.getOrderCountByDateAndStatus = async (req, res) => {
  let startDate = new Date(req.params.start_date);
  let endDate = new Date(req.params.end_date);
  const status = req.params.status;
  if (startDate > endDate) {
    let temp = startDate;
    startDate = endDate;
    endDate = temp;
  }
  const orders = await Order.findAll({
    where: {
      date: {
        [Op.and]: {
          [Op.gte]: startDate,
          [Op.lte]: endDate,
        },
      },
      status,
    },
    attributes: [
      "status",
      [sequelize.fn("COUNT", sequelize.col("id")), "count"],
      "date",
    ],
    group: ["date", "status"],
  });
  res.status(200).json(orders);
};
