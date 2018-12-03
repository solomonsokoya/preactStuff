import {h, Component} from "preact";
import CharacterButtonComponent from "./components/CharacterButtonComponent";
import {CharacterData} from "./model/CharacterData";
import {StarWarsError} from "../starWarsApi/StarWarsError"

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
      const cssClass = "amex-welcomeContainer" + (this.state.isLoading? " isLoading": "");
        return(
          <div class={cssClass}>
            <h1> StarWars</h1>

            <div class="buttonContainer">
            {chars.map((char) =>
              <CharacterButtonComponent
                character = {char}
                onClick = {(url) => this.onClick(url)}
              />)}
            </div>
            <h1 class ="errorMessage">{this.state.validityMessage ? this.state.validityMessage : undefined} </h1>
          </div>
      )
    }


  onClick(url: string){
      this.setState({
        isLoading: true
      });

      this.props.onSumbit(url)
        .catch((error: StarWarsError) => {
          this.setState({
            validityMessage: error.message
          })
        }).finally(() =>{
          this.setState({
            isLoading: false
          })
        });
    }
}
