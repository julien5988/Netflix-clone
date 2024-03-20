const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTk5ODgyYzQyNmYwZTkyYWI4NzMzYzI1MGY1NTNlOSIsInN1YiI6IjY1ZjQ0NzI4NWI5NTA4MDE2MjFiNDZkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xIuPmdr2s1gKKnWWgLaafXmtjnUFXRU1mBgnTKUwUH4'
    }
  };
  
  export default async function DiscoverFilm() {
    try {
      const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options);
      const data = await response.json();
      return data.results; // Retourne les résultats des films découverts
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  