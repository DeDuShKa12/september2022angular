import {environment} from "../../environments/environment";

const {API} = environment;

const users = `${API}/users`

const posts = `${API}/posts`

const urls = {
  users: {
    full: users,
    byId:(id:number): string => `${users}/${id}`,
  },
  posts: {
    full: posts,
    byId:(id:number): string => `${posts}/${id}`,
    CommentById:(id: number): string => `${posts}/${id}/comments`
  }
}

export {
  urls
}
