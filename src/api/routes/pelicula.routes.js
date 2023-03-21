const express = require("express");

const router = express.Router();

const {
  getPelicula,
  getPeliculaPorId,
  getPeliculaTitulo,
  getPeliculaGenero,
  getPeliculaFechaEstreno,
  postPelicula,
  putPelicula,
  deletePelicula,
} = require("../controllers/pelicula.controller");

router.get("/id/:id", getPeliculaPorId);
router.get("/titulo/:title", getPeliculaTitulo);
router.get("/genero/:genre", getPeliculaGenero);
router.get("/fecha/:year", getPeliculaFechaEstreno);
router.get("/", getPelicula);
router.post("/", postPelicula);
router.put("/:id", putPelicula);
router.delete("/:id", deletePelicula);
module.exports = router;
