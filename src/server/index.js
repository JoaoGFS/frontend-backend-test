const express = require('express')

const app = express()

async function getWord(lineNumber) {
  const getLine = require('nthline')

  let word = await getLine(lineNumber, './pt_BR.dic')

  console.log(word)

  return word
}

app.use(express.json())

app.post('/', async (req, res) => {
  let word = await getWord(req.body.num)

  res.json({
    word
  })
})

app.get('/', (req, res) => {
  return res.json({ msg: 'Get, indeed!' })
})

app.listen(4000)
