import {shim} from "promise.prototype.finally";
shim();

import { h, render } from "preact";
import StarWarsWelcomeComponent from "./StarWarsWelcomeComponent";
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

  renderCharacterCard(character: CharacterData, films: Array<string>){
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

    try{
      var json = await starWarsApi.starWarsApiCall(url);
      charData = {
        name: json.name,
        filmUrls: json.films,
        gender: json.gender
      };
      var urls = charData.filmUrls;
      var json1 = await Promise.all(urls.map(url => starWarsApi.starWarsApiCall(url)))

      json1.forEach((film) =>{
        films.push({
          title: film.title,
          releaseDate: this.formatDate(film.release_date)
        })
      })

      this.renderCharacterCard(charData, films);
    } catch {
      console.log('error')
    }
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
// render(<StarWarsAppCharacterApp/>, document.querySelector("#app"));
