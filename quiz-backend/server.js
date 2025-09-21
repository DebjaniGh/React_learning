const express = require("express");
const cors = require("cors");
const app = express();
const quizRoute = require("./routes/quiz");

app.use(cors());

app.use("/quiz", quizRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port 5000");
});
