import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Upis = db.define('upisi', {
    student_id: {
        type: DataTypes.TINYINT,
        primaryKey: true
    }, predmet_id: {
        type: DataTypes.TINYINT, primaryKey: true
    }, status: {
        type: DataTypes.STRING
    }

}, {
    freezeTableName: true
});

export default Upis;