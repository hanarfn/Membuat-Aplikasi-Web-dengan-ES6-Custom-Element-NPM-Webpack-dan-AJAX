class MovieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }
  set movie(movie) {
    this._movie = movie;
    this.render();
  }
 
  render() {
    this.shadowDOM.innerHTML = `
      <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      :host {
        display: block;
        margin-bottom: 18px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        overflow: hidden;
        background-color: white;
      }
      .fan-art-movie {
        border-radius: 12px;
        margin: 20px 20px 20px 40px;
        width: 300px;
        height: 450px;
        object-fit: cover;
        object-position: center;
      }
      .movie-info {
        margin: 5px;
        padding: 20px 20px 0 0;
        float: right;
        width: 50%;
        height: 450px;
        text-align: justify;
      }
      .movie-info > p {
        margin-top: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 10; /* number of lines to show */
      }
      </style>

      <img class="fan-art-movie" src="https://image.tmdb.org/t/p/original/${this._movie.poster_path}" alt="Fan Art">
      <div class="movie-info">
        <h2>${this._movie.title}</h2>
        <p>${this._movie.overview}</p>
      </div>
    `;
  }
}
customElements.define('movie-item', MovieItem);