import React, { Component } from 'react'
// import word from './getWord'
import './style.css'
import Axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      word: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    console.log(this.state.value)
    Axios.post('http://localhost:4000', {
      num: this.state.value
    })
      .then((res) => {
        console.log(`res.data.word:${res.data.word}`)
        this.setState({
          word: res.data.word
        })
      })
      .catch((err) => {
        console.log(err)
      })
    e.preventDefault()
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div className='box'>
        <form onSubmit={this.handleSubmit} method='post'>
          <label>
            Number:
            <input
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
              placeholder='Digite um número'
            />
            <button type='submit'>Procurar</button>
            <p>{this.state.word}</p>
          </label>
        </form>
      </div>
    )
  }
}
