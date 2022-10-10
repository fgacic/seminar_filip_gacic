import Korisnik from "../models/korisnikModel.js";

import jwt from 'jsonwebtoken'

export const getAllKorisnik = async (req, res) => {
    try {
        const korisnik = await Korisnik.findAll();
        res.json(korisnik);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getKorisnikById = async (req, res) => {
    try {
        const korisnik = await Korisnik.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(korisnik[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createKorisnik = async (req, res) => {
    try {
        await Korisnik.create(req.body);
        res.json({
            "message": "Korisnik Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateKorisnik = async (req, res) => {
    try {
        await Korisnik.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Korisnik Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteKorisnik = async (req, res) => {
    try {
        await Korisnik.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Korisnik Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}
export const loginKorisnik = async (req, res) => {
    const user = await Korisnik.findOne({ where: { email: req.body.email } });
    if (user) {
        if (req.body.password === user.password) {
            var token = jwt.sign({ "id": user.id, "email": user.email, "first_name": user.first_name, "isMentor": user.role === "mentor" }, 'filip-secret');
            res.status(200).json({ token: token });
        } else {
            res.status(400).json({ error: "Password Incorrect" });
        }
    } else {
        res.status(404).json({ error: "User does not exist" });
    }
}
