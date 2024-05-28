async function getTrendingMoviesPreview() {
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
    const data = await res.json();
  
    const movies = data.results;
    movies.forEach(movie => {
      const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview');
  
      const movieContainer = document.createElement('div');
      movieContainer.classList.add('movie-container', 'bg-white', 'p-4', 'rounded', 'shadow');
  
      const movieImg = document.createElement('img');
      movieImg.classList.add('w-1/3', 'h-32');
      movieImg.setAttribute('alt', movie.title);
      movieImg.setAttribute(
        'src',
        'https://image.tmdb.org/t/p/w300' + movie.poster_path,
      );
  
      const information = document.createElement('div');
      information.classList.add('mt-4');
  
      const titulo = document.createElement('h3');
      titulo.classList.add('text-lg', 'font-bold', 'text-center');
      titulo.innerText = movie.title;
  
      const description = document.createElement('p');
      description.classList.add('text-gray-600');
      description.setAttribute('style', 'max-width: 300px; overflow: hidden; text-overflow: ellipsis;');
      description.innerText = movie.overview;
     
  
      const popularity = document.createElement('h3');
      popularity.classList.add('text-lg', 'font-bold', 'text-center');
      popularity.innerText = movie.popularity;
  
      const release_date = document.createElement('h2');
      release_date.classList.add('text-gray-600', 'mt-2', 'text-center');
      release_date.innerText = movie.release_date;
  
      movieContainer.appendChild(movieImg);
      movieContainer.appendChild(information);
      information.appendChild(titulo);
      information.appendChild(description);
      information.appendChild(popularity);
      information.appendChild(release_date);
      trendingPreviewMoviesContainer.appendChild(movieContainer);
    });
  }
  
  getTrendingMoviesPreview();
  