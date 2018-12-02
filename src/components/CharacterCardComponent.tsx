import {h, Component} from "preact";
import {CharacterData} from "../model/CharacterData";


interface CharacterCardProps {
  character: CharacterData;
  films: Array<string>;
}

export default class CharacterCardComponent extends Component<CharacterCardProps,{}>{
  render(props: CharacterCardProps){
    return(<h1>{this.props.character.name}</h1>)
  }
}
