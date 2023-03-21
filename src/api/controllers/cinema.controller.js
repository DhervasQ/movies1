const Cinema = require("../models/cinema.model");

const getCinema = async (req, res) => {
  try {
    const allCinema = await Cinema.find();
    return res.status(200).json(allCinema);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getCinemaById = async (req, res) => {
    const id = req.params.id;
    console.log(req.params.id);

    try {
      const cinema = await Cinema.findById(id).populate("movies");
      console.log(cinema);
      if (cinema) {
        return res.status(200).json(cinema);
      } else {
        return res
          .status(404)
          .json("No se encontro ningun cine con este Id");
      }
    } catch (err) {
      return res.status(500).json(err);
    }
};

const postCinema = async (req, res) => {
  try {
    console.log(req.body);
    const newCinema = new Cinema(req.body);
    const createdCinema = await newCinema.save();
    return res.status(200).json(createdCinema);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putCinema = async (req, res) => {
  try {
    const { id } = req.params;
    const putCinema = new Cinema(req.body);
    putCinema._id = id;
    const updateCinema = await Cinema.findByIdAndUpdate(id, putCinema, {
      new: true,
    });
    if (!updateCinema) {
      return res.status(404).json({ message: "cinema not found" });
    }
    return res.status(200).json(updateCinema);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCinema = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCinema = await Cinema.findByIdAndDelete(id);
    if (!deleteCinema) {
      return res.status(404).json({ message: "cinema not found" });
    }
    return res.status(200).json(deleteCinema);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCinema,
  postCinema,
  putCinema,
  deleteCinema,
  getCinemaById
};
