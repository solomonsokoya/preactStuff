import {h, Component} from 'preact';
import CharacterButtonComponent from "./components/CharacterButtonComponent";
import {characters}from "../characters.json";

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
              characters = {char}
            />
        )} </div>
      )
    }
}
