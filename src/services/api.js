import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://api.platform.sandbox.easytranslate.com`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
    }
  })
}

// NOTE: Localstorage is an insecure method of storing auth tokens, 
// I would normally receive it via a cookie but this is a frontend test so we'll make do for now :)