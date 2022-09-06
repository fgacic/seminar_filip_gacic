import Predmet from "../models/predmetModel.js";

import jwt from 'jsonwebtoken'


export const getAllPredmet = async (req, res) => {
    try {
        const predmet = await Predmet.findAll();
        res.json(predmet);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getPredmetById = async (req, res) => {
    try {
        const predmet = await Predmet.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(predmet[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}
export const getPredmetByStudentId = async (req, res) => {
    try {
        const predmet = await Predmet.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(predmet[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createPredmet = async (req, res) => {
    try {
        await Predmet.create(req.body);
        res.json({
            "message": "Predmet Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updatePredmet = async (req, res) => {
    try {
        await Predmet.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Predmet Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deletePredmet = async (req, res) => {
    try {
        await Predmet.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Predmet Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}
