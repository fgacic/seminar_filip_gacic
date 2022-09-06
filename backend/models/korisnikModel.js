import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Product = db.define('korisnici', {
    id: {
        type: DataTypes.TINYINT,
        autoIncrement: true,
        primaryKey: true
    }, email: {
        type: DataTypes.STRING
    }, password: {
        type: DataTypes.STRING
    }, role: {
        type: DataTypes.ENUM('mentor', 'student')
    }, status: {
        type: DataTypes.ENUM('none', 'redovni', 'izvanredni')
    }


}, {
    freezeTableName: true
});

export default Product;