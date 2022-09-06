import Upis from "../models/upisModel.js"

export const getAllUpis = async (req, res) => {
    try {
        const upis = await Upis.findAll();
        res.json(upis);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getUpisByStudentId = async (req, res) => {
    try {
        const upis = await Upis.findAll({
            where: {
                id: req.params.student_id
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

