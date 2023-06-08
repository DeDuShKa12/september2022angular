import {environment} from "../../environments/environment";

const {API} = environment;

const cars:string = `${API}/cars`

const auth: string = `${API}/auth`

const users: string = `${API}/users`

const urls = {
  cars: {
    full: cars
  },
  auth: {
    login: auth,
    refresh: `${auth}/refresh`,
    me: `${auth}/me`,
    register: users
  }

}

export {
  urls
}
