import jwt from 'jsonwebtoken'

export const me = async (req, res) => {
    try {
        let nesta = jwt.verify(req.header.authorization)
        res.json(nesta);
    } catch (error) {
        res.json({ message: error.message });
    }
}