import { h, render } from "preact";
import StarWarsWelcomeComponent from "./StarWarsWelcomeComponent";
import {characters} from "../characters.json";
import {CharacterData} from "./model/CharacterData";
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
    />,
      this.el);
  }

  //To-do: Clean up
  onCharSumbit(url: string){
    var charData: CharacterData;
    return starWarsApi.starWarsApiCall(url)
      .then((data: any) => {
        charData = {
          name: data.name,
          filmUrls: data.films,
          gender: data.gender
        }
      }).then((data: any) => {
        console.log(charData.filmUrls);
        var urls = charData.filmUrls;
        Promise.all(urls.map(url => starWarsApi.starWarsApiCall(url)))
          .then(resp => resp.forEach(x => console.log(x)));
      })
  }

}

if(el){
  const app = new StarWarsApp(el);
  app.renderWelcomePage();
}
// render(<StarWarsAppCharacterApp/>, document.querySelector("#app"));
