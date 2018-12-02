import {h, Component} from "preact";
import CharacterButtonComponent from "./components/CharacterButtonComponent";
import {CharacterData} from "./model/CharacterData";

interface MainAppComponentProps {
    name?: string;
    chars: CharacterData[];
    onSumbit: (url: string) => Promise<any>;
}

interface MainAppComponentState{
  validityMessage?: string;
  isLoading: boolean;
}

export default class StarWarsWelcomeComponent extends Component<MainAppComponentProps, MainAppComponentState> {
    render (props: MainAppComponentProps) {
      const chars = this.props.chars;
        return( <div> {chars.map((char) =>
            <CharacterButtonComponent
              character = {char}
              onCharacterClick = {(url) => this.props.onSumbit(url)}
            />
        )} </div>
      )
    }
}
