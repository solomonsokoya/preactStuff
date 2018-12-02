import {StarWarsError} from "./StarWarsError"

export function starWarsApiCall(url: any){
  return fetch(url)
            .then(resp => resp.json())
              .catch(error => {
                  throw new StarWarsError(error.status)
                  });
}
