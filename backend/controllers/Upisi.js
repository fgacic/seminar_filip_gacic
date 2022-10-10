import Upis from "../models/upisModel.js"
import Predmet from "../models/predmetModel.js";
import Korisnik from "../models/korisnikModel.js";



export const getAllUpis = async (req, res) => {
    try {
        const upis = await Upis.findAll();
        res.json(upis);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getUpisById = async (req, res) => {
    try {
        const upis = await Upis.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(upis);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getUpisPredmetId = async (req, res) => {
    try {
        const upis = await Upis.findAll({
            where: {
                id: req.params.predmet_id
            }
        });
        res.json(upis);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createUpis = async (req, res) => {
    try {
        await Upis.create(req.body);
        res.json({
            "message": "Upis Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateUpis = async (req, res) => {
    try {
        await Upis.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Upis Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteUpis = async (req, res) => {
    try {
        await Upis.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Upis Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}


export const getPredmetByStudent = async (req, res) => {
    try {
        const predmeti = await Upis.findAll({
            where: {
                student_id: req.params.student_id
            }
        }).then(async res => {
            console.log(res)
            const predmet = await Predmet.findAll({
                where: {
                    id: res.map(upis => upis.predmet_id)
                }
            });
            return predmet
        })
        res.json({ predmeti })

    } catch (error) {
        res.json({ message: error.message });
    }
}

export const ispisiPredmet = async (req, res) => {
    try {
        await Upis.destroy({
            where: {
                student_id: req.params.student_id,
                predmet_id: req.params.predmet_id
            }
        });
        res.json({
            "message": "Upis Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

