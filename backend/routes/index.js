import express from "express";



import {
    getAllKorisnik,
    createKorisnik,
    getKorisnikById,
    updateKorisnik,
    deleteKorisnik
    , loginKorisnik
} from "../controllers/Korisnici.js";

import {
    getAllPredmet,
    createPredmet,
    getPredmetById,
    updatePredmet,
    deletePredmet
} from "../controllers/Predmeti.js";
import { getAllUpis, getUpisByStudentId, getUpisPredmetId, createUpis, updateUpis, deleteUpis }
    from "../controllers/Upisi.js"
const router = express.Router();

router.get('/korisnici/', getAllKorisnik);
router.get('/korisnici/:id', getKorisnikById);
router.post('/korisnici/', createKorisnik);
router.patch('/korisnici/:id', updateKorisnik);
router.delete('/korisnici/:id', deleteKorisnik);
router.post('/korisnici/login', loginKorisnik)

router.get('/predmeti/', getAllPredmet);
router.get('/predmeti/:id', getPredmetById);
router.post('/predmeti/', createPredmet);
router.patch('/predmeti/:id', updatePredmet);
router.delete('/predmeti/:id', deletePredmet);

router.get('/upisi/', getAllUpis);
router.get('/upisi/:id', getUpisByStudentId);
router.post('/upisi/', createUpis);
router.patch('/upisi/:id', updateKorisnik);
router.post('/upisi/login', loginKorisnik)
router.delete('/upisi/:id', deleteUpis);


export default router;