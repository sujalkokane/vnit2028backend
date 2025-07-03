const cse = require("./json/cse.json");
const ece = require("./json/ece.json");
const eee = require("./json/eee.json");
const mec = require("./json/mec.json");
const chem = require("./json/chem.json");
const civil = require("./json/civil.json");
const meta = require("./json/meta.json");
const min = require("./json/min.json");
const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors());
app.get("/api/cse", (req, res) => {
  res.json(cse);
});
app.get("/api/ece", (req, res) => {
  res.json(ece);
});
app.get("/api/eee", (req, res) => {
  return res.json(eee);
});
app.get("/api/mec", (req, res) => {
  return res.json(mec);
});
app.get("/api/civil", (req, res) => {
  return res.json(civil);
});
app.get("/api/chem", (req, res) => {
  return res.json(chem);
});
app.get("/api/meta", (req, res) => {
  return res.json(meta);
});
app.get("/api/min", (req, res) => {
  return res.json(min);
});

app.listen(8000, () => {
  console.log("Server Startd");
});
