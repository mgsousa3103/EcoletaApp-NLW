import express from "express";

const app = express();

app.get("/users", (req, res) => {
  return res.json(["Diego", "Cleiton", "Robson", "Daniel"]);
});

app.listen(3333);
