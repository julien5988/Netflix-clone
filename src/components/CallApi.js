const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: '' // ajouter la key API 
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
  
