const express = require("express");
const dotenv = require("dotenv");
const { connect } = require("./src/utils/database");
dotenv.config();
const PORT = process.env.PORT || 5500;
const routerPelicula = require("./src/api/routes/pelicula.routes");
const routerCinema = require("./src/api/routes/cinema.routes");
const app = express();
connect();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/peliculas", routerPelicula);
app.use("/cinema", routerCinema);
app.listen(PORT, () => {
  console.log("listening on http://localhost:5500");
});
