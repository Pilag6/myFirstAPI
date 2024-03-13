import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/randomNumber", (req, res) => {
    res.json(Math.floor(Math.random() * 100).toString());
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT http://localhost:${PORT}`);
});
