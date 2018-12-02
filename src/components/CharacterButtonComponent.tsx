import {h, Component} from "preact";
import {CharacterData} from "../model/CharacterData";


interface CharacterButtonProps {
  characters: CharacterData
}

export default class CharacterButtonComponent extends Component<CharacterButtonProps,{}>{
  render(props: CharacterButtonProps){
    return(<div>hi</div>)
  }
}
