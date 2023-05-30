const baseURL = 'https://jsonplaceholder.typicode.com'

const users = `${baseURL}/users`

const posts = `${baseURL}/posts`

const urls = {
  users: {
    users,
    byId:(id:number): string => `${users}/${id}`,
  },
  posts: {
    posts,
    CommentById:(id: number): string => `${posts}/${id}/comments`
  }
}

export {
  urls
}
