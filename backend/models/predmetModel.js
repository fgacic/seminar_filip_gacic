import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Predmet = db.define('predmeti', {
    id: {
        type: DataTypes.TINYINT,
        autoIncrement: true,
        primaryKey: true
    }, ime: {
        type: DataTypes.STRING
    }, kod: {
        type: DataTypes.STRING
    }, program: {
        type: DataTypes.STRING
    }, bodovi: {
        type: DataTypes.TINYINT,
    }, sem_redovni: {
        type: DataTypes.TINYINT
    }, sem_izvanredni: {
        type: DataTypes.TINYINT
    }, izborni: {
        type: DataTypes.ENUM('da', 'ne')
    }

}, {
    freezeTableName: true
});

export default Predmet;