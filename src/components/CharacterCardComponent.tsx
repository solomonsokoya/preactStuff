import {h, Component} from "preact";
import {CharacterData} from "../model/CharacterData";
import {FilmData} from "../model/FilmData";

interface CharacterCardProps {
  character: CharacterData;
  films: Array<FilmData>;
}

export default class CharacterCardComponent extends Component<CharacterCardProps,{}>{
  render(props: CharacterCardProps){
    const films = this.props.films
    return(
      <div class= "characterContainer">
        <h1 class= "charName">{this.props.character.name}</h1>
        <div class ="filmContainer">
          {films.map((film) =>
            <div class ="infoContainer">
              <h1>Title: {film.title}</h1>
              <h1>Release Date: {film.releaseDate}</h1>
            </div>
          )}
        </div>
      </div>

    )
  }
}
