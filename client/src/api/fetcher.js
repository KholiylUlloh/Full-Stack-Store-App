import axios from 'axios'

const url = 'http://localhost:3001/api'

export const fetchPosts = () => axios.get(`${url}/posts`);
export const createPost = (newPost) => axios.post(`${url}/`)