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
import { getAllUpis, getUpisById, createUpis, updateUpis, deleteUpis, getPredmetByStudent, ispisiPredmet }
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
router.get('/upisi/:id', getUpisById);
router.post('/upisi/', createUpis);
router.patch('/upisi/:id', updateUpis);
router.delete('/upisi/:id', deleteUpis);

router.get('/korisniciprekopredmeta/:student_id', getPredmetByStudent)
router.delete('/ispisi/:student_id/:predmet_id', ispisiPredmet)




export default router;