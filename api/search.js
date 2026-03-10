export default async function handler(req, res) {
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = process.env.API_KEY;
  const query = req.query.q;

  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query,
      )}`,
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Search failed" });
  }
}
