import express from "express";
import cors from "cors";

// console.log(process.env);
const app = express();
const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json("hello world");
});

app.get("/weather/:location", async (req, res) => {
    console.log(req.params.location);
	const response = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${req.params.location}&apikey=${API_KEY}`);
	const data = await response.json();

	res.send("Current temperature: " + data.timelines.minutely[0].values.temperature);
	// res.json(data);
})

app.listen(PORT);
