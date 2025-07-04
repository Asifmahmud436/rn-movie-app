export const TMDB_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY: process.env.EXPO_PUBLIC_API_KEY,
  headers: {
    accept: 'application/json',
  },
};

export const fetchPopularMovies = async ({ query }: { query: string }) => {
  const url = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}&api_key=${TMDB_CONFIG.API_KEY}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${TMDB_CONFIG.API_KEY}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: TMDB_CONFIG.headers,
  });

  const text = await response.text();
  console.log("🔥 Response Text:", text);

  if (!response.ok) {
    throw new Error(`Failed to fetch movies: ${response.status} - ${text}`);
  }

  const data = JSON.parse(text);
  return data.results;
};

export const fetchmovieDetails = async (movieId: string): Promise<MovieDetails> =>{
  try{
    const response = await fetch(`${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`,{
      method: "GET",
      headers: TMDB_CONFIG.headers,

    });
    if(!response.ok) throw new Error("Failed to fetch movie details")

      const data = await response.json()
      return data;
  }catch(error){
    console.log(error);
    throw error;
  }
  
}