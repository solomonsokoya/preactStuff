import {shim} from "promise.prototype.finally";
shim();
import { h, render } from "preact";
import StarWarsWelcomeComponent from "./StarWarsWelcomeComponent";
import "./style/style.less"
import CharacterCardComponent from "./components/CharacterCardComponent";
import {characters} from "../characters.json";
import {CharacterData} from "./model/CharacterData";
import {FilmData} from "./model/FilmData";
import * as starWarsApi from "../starWarsApi";

var el = document.querySelector("#app");

class StarWarsApp {
  constructor(el: Element){
    this.el = el;
  }
  el: Element;

  renderWelcomePage(){
    this.el.innerHTML = "";
    render(<StarWarsWelcomeComponent
      chars = {characters}
      onSumbit = {(url) => this.onCharSumbit(url)}
    />,this.el);
  }

  renderCharacterCard(character: CharacterData, films: Array<FilmData>){
    this.el.innerHTML = "";
    render(<CharacterCardComponent
      character = {character}
      films = {films}
    />, this.el)
  }

  //To-do: Clean up
  async onCharSumbit(url: string){
    var charData: CharacterData;
    var films = [];
    var characterJSON: any;
    var filmJSON: any;
    var promiseAll: any;

    var charPromise = await starWarsApi.starWarsApiCall(url);

    characterJSON = await charPromise.json()
    charData = { name: characterJSON.name, filmUrls: characterJSON.films, gender: characterJSON.gender };

    var urls = charData.filmUrls;
    promiseAll = await Promise.all(urls.map(url => starWarsApi.starWarsApiCall(url)));

    promiseAll.forEach(async (film) =>{
        filmJSON = await film.json();
          films.push({
            title: filmJSON.title,
            releaseDate: this.formatDate(filmJSON.release_date)
          })
          this.renderCharacterCard(charData, films);
        })

  }

  formatDate(date: string){
    // https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateFormat = new Date(date);
    return dateFormat.toLocaleDateString("en-US", options)
  }
}

if(el){
  const app = new StarWarsApp(el);
  app.renderWelcomePage();
}
