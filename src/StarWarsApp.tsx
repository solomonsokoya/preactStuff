import {h, Component} from "preact";
import CharacterButtonComponent from "./components/CharacterButtonComponent";
import {characters} from "../characters.json";
import * as starWarsApi from "../starWarsApi";

interface MainAppComponentProps {
    name?: string
}

interface MainAppComponentState{
  validityMessage?: string;
  isLoading: boolean;
}

export default class StarWarsApp extends Component<MainAppComponentProps, MainAppComponentState> {
    render (props: MainAppComponentProps) {
      console.log(characters);
        return( <div> {characters.map((char) =>
            <CharacterButtonComponent
              character = {char}
              onCharacterClick = {(url) => starWarsApi.starWarsApiCall(url)}
            />
        )} </div>
      )
    }
}
