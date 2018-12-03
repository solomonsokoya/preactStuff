import {h, Component} from "preact";
import {CharacterData} from "../model/CharacterData";
import { Button } from 'semantic-ui-react';


interface CharacterButtonProps {
  character: CharacterData;
  onClick: (url: string) => void;
}

export default class CharacterButtonComponent extends Component<CharacterButtonProps, {}>{

  render(props: CharacterButtonProps){
    const charName = this.props.character.name;
    const charUrl = this.props.character.url;


    return(<button onClick = {() => this.props.onClick(charUrl)}>{charName}</button>)
  }
}
