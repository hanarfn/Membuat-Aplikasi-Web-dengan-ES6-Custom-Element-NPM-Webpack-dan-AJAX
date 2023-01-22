class DataSource {
  static searchMovie(keyword) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=f6bcf9844871b7ddb1c34b9fa7ce750e&language=en-US&query=${keyword}&page=1&include_adult=false`)
        .then(response => {
          return response.json()
        })
        .then(responseJson => {
          if (responseJson.results) {
            return Promise.resolve(responseJson.results);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        })
  }
}
export default DataSource;