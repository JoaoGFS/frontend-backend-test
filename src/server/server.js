const express = require('express')
const cors = require('cors')

const app = express()

async function getWord(lineNumber) {
  const getLine = require('nthline')

  let word = await getLine(lineNumber, './pt_BR.dic')

  console.log(word)

  return word
}

app.use(cors())

app.use(express.json())

app.post('/', async (req, res) => {
  console.log('POST request received')

  let lineNumber = Number.parseInt(req.body.num)

  let word = await getWord(lineNumber)

  res.json({
    word
  })
})

app.get('/', async (req, res) => {
  console.log('GET request received')
  console.log(`request body:${req}`)

  let word = await getWord(12)

  return res.json({
    msg: 'Get, indeed!',
    word
  })
})

app.listen(4000)
