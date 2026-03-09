export const getPopularMovies = async () => {
    const response = await fetch("/api/movies/popular");
    const data = await response.json();
    return data;
};

export const searchMovies = async (query) => {
    const response = await fetch(
        `/api/movies/search?q=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    return data;
};