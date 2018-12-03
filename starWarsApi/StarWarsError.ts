export enum StarWarsErrorCode {
  DetailsNotFound = 404,
  UnexpectedError = 500
}

export class StarWarsError{
  code: StarWarsErrorCode;
  message: string;

  constructor(httpErrorCode: number){
    switch(httpErrorCode){
      case 404:
        this.code = StarWarsErrorCode.DetailsNotFound;
        this.message = "Sorry No Info"
        break;
      default:
        this.code = StarWarsErrorCode.UnexpectedError;
        this.message = "Sorry, We Are Having Unexpected Troubles Right Row"
    }
  }
}
