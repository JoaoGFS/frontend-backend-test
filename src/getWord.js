const axios = require('axios')

const word = axios.post('localhost:4000', {
  num: 123
})

export default word
