import express from "express";
import sum from "./sum.js";

const app = express();
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/home", async  (req, res) => {
    res.json({
        message: "iam root"
    });
});

app.get("/getSum/:a/:b", async (req, res) => {
    const { a, b } = req.params;
    res.json({
        result: sum(parseInt(a), parseInt(b))
    });
});
