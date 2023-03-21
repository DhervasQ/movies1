const express = require('express');
const {getCinema, getCinemaById, postCinema, putCinema, deleteCinema}  = require('../controllers/cinema.controller');
const router = express.Router();


router.get('/id/:id', getCinemaById);
router.post('/', postCinema);
router.put('/:id', putCinema);
router.delete('/:id', deleteCinema);
router.get('/', getCinema);
module.exports = router;