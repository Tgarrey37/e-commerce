// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.integer,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.string,
      allowNull: false,
    },

    price: {
      type: DataTypes.decimal,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.integer,
      allowNull: false,
      default: 10,
      validate: {
        isNumeric: true,
      },
    },

    category: {
      type: DataTypes.integer,
      references: {
        model: "Category",
        key: "id",
      },
    },
  },
  // define columns

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
