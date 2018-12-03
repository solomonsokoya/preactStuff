import {StarWarsError} from "./StarWarsError";

export function starWarsApiCall(url: any){
  return fetch(url)
          .then(resp => {
            if(!resp.ok)
              throw new Error()
              return resp;
            })
              .catch(error => {
                  throw new StarWarsError(error.status)
                  });
}
