import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const API_KEY = process.env.YOUR_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

app.get("/api/movies/popular", async (req, res) => {
    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    res.json(data.results);
});

app.get("/api/movies/search", async (req, res) => {
    const query = req.query.q;

    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            query
        )}`
    );
    const data = await response.json();
    res.json(data.results);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});