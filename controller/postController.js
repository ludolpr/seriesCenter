const express = require("express");
const router = express.Router();
const Series = require("../models/serieModel");

module.exports.createSeries = async (req, res) => {
  try {
    const { nameSerie, serieDescription, picture, idUser, idCategory } =
      req.body;
    const newSeries = await Series.create({
      nameSerie,
      serieDescription,
      picture,
      idUser,
      idCategory,
    });
    res.status(201).json(newSeries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getAllSeries = async (req, res) => {
  try {
    const allSeries = await Series.findAll();
    res.status(200).json(allSeries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getSeriesById = async (req, res) => {
  const { id } = req.params;
  try {
    const series = await Series.findByPk(id);
    if (series === null) {
      res.status(404).json({ message: "Série introuvable" });
    } else {
      res.status(200).json(series);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.updateSeries = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Series.update(req.body, { where: { idSerie: id } });
    if (updated) {
      const updatedSeries = await Series.findByPk(id);
      res.status(200).json(updatedSeries);
    } else {
      res.status(404).json({ message: "Série introuvable" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.deleteSeries = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Series.destroy({ where: { idSerie: id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Série introuvable" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
