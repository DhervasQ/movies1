const Movie = require("../models/pelicula.model");

const getPelicula = async (req, res) => {
  try {
    const allMovies = await Movie.find();
    return res.status(200).json(allMovies);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postPelicula = async (req, res) => {
  try {
    console.log(req.body);
    const newPelicula = new Movie(req.body);
    const createdMovie = await newPelicula.save();
    return res.status(201).json(createdClient);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putPelicula = async (req, res) => {
  try {
    const { id } = req.params;
    const putPelicula = new Movie(req.body);
    putPelicula._id = id;

    const updatePelicula = await Movie.findByIdAndUpdate(id, putPelicula, {
      new: true,
    });
    if (!updatePelicula) {
      return res.status(404).json({ message: "pelicula no encontrada" });
    }
    return res.status(200).json(updatePelicula);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deletePelicula = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePelicula = await Movie.findByIdAndDelete(id);
    if (!deletePelicula) {
      return res.status(404).json({ message: "Pelicula no encontrada" });
    }
    return res.status(200).json(deletePelicula);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getPeliculaPorId = async (req, res) => {
  const id = req.params.id;
  try {
    const movie = await Movie.findById(id);
    if (movie) {
      return res.status(200).json(movie);
    } else {
      return res
        .status(404)
        .json("No se encontro ninguna Pelicula con este Id");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getPeliculaTitulo = async (req, res) => {
  const { title } = req.params;

  try {
    const movieByTitle = await Movie.find({ title });
    return res.status(200).json(movieByTitle);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getPeliculaGenero = async (req, res) => {
  const { genre } = req.params;

  try {
    const movieByGenre = await Movie.find({ genre });
    return res.status(200).json(movieByGenre);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getPeliculaFechaEstreno = async (req, res) => {
  const { year } = req.params;

  try {
    const movieByYear = await Movie.find({ year: { $gt: year } });
    return res.status(200).json(movieByYear);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  getPelicula,
  getPeliculaPorId,
  getPeliculaTitulo,
  getPeliculaGenero,
  getPeliculaFechaEstreno,
  postPelicula,
  putPelicula,
  deletePelicula,
};
