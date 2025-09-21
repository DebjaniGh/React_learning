const express = require("express");
const router = express.Router();
const weatherData = require("../data/dummyWeather.json");

router.get("/:city", (req, res) => {
  const city = req.params.city.toLowerCase();

  const data = weatherData[city];

  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ error: "Could not find city." });
  }
});

module.exports = router;
