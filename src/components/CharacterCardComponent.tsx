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
    console.log(films);
    return(
      <div>
        <h1>{this.props.character.name}</h1>
        <div>
          {films.map((film) =>
            <h1>{film.title}</h1>
          )}
        </div>
      </div>

    )
  }
}
