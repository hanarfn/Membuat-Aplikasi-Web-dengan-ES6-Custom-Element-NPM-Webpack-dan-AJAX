class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }
  connectedCallback() {
    this.render();
  }
    
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }
   
  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }
   
  render() {
    this.shadowDOM.innerHTML = `
    <style>
    .search-container {
      max-width: 800px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      padding: 16px;
      border-radius: 8px;
      display: flex;
      position: sticky;
      top: 10px;
      background-color: white;
    }
    .search-container > ::placeholder{
      background-color: rgba(0, 0, 0, 0.2);
      padding: 16px;
      border-radius: 8px;
    }
    .search-container > input {
      width: 75%;
      border: 0;
      outline: 0;
    }
    .search-container > input:focus::placeholder {
      font-weight: bold;
    }
    .search-container > input::placeholder {
      font-weight: normal;
      opacity: 70%;
    }
    .search-container > button {
      border-radius: 13px;
      width: 23%;
      cursor: pointer;
      margin-left: auto;
      padding: 16px;
      background-color: #395B64;
      color: white;
      border: 0;
      text-transform: uppercase;
    }
    @media screen and (max-width: 550px) {
      .search-container {
        flex-direction: column;
        position: static;
      }
    
      .search-container > input {
        width: 100%;
        margin-bottom: 12px;
      }
    
      .search-container > button {
        width: 100%;
      }
    }
    </style>

    <div id="search-container" class="search-container">
      <input placeholder="find your favorite movie" id="searchElement" type="search">
      <button id="searchButtonElement" type="submit">Search</button>
    </div>
    `;
  
    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}
   
customElements.define('search-bar', SearchBar);