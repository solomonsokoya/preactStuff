import {h, Component} from "preact";
import {CharacterData} from "../model/CharacterData";


interface CharacterButtonProps {
  character: CharacterData;
  onCharacterClick: (url: string) => Promise<any>;
}

export default class CharacterButtonComponent extends Component<CharacterButtonProps,{}>{
  render(props: CharacterButtonProps){
    const charName = this.props.character.name;

    return(<button onClick= {() => this.onClick()}>{charName}</button>)
  }

  onClick(){
    const charUrl = this.props.character.url;
    this.props.onCharacterClick(charUrl)
      .catch((error) => console.log("hi i am ")).finally(() => console.log("done"));
  }
}
