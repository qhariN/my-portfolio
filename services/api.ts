export const apiUrl = {
  npoint: 'https://api.npoint.io',
  github: 'https://api.github.com'
}

const Fetch = (endpoint: string) => {
  return fetch(endpoint)
    .then(response => response.json())
}

export default Fetch