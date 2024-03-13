import express from "express";
import cors from "cors";

// console.log(process.env);
const app = express();
const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT;
const environment = process.env.NODE_ENV;

// const environment = process.argv[2]; // "prod(production)"
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json("hello world");
});

app.get("/randomNumber", (req, res) => {
    res.json(Math.floor(Math.random() * 100).toString());
});

app.get("/weather/:location", async (req, res) => {
    console.log(req.params.location);
	const response = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${req.params.location}&apikey=${API_KEY}`);
	const data = await response.json();
	res.send("Current temperature: " + data.timelines.minutely[0].values.temperature);
	// res.json(data);
})

app.listen(PORT, () => {
    if (environment === "development") {
        console.log(`server is running on http://localhost:${PORT}`);
    } else {
        console.log("server running on production");
    }
});
