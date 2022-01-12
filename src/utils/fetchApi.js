import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async url => {
  const response = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': `${process.env.RAPID_API_KEY}`,
    },
  })
  const data = response.data
  return data
}
