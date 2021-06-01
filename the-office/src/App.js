import './App.css';
import React, { Component } from 'react'
import CharacterContainer from './components/CharacterContainer'

export default class App extends Component {

  state = {
    characters: '',
    quotes: '',
    episodes: ''
  }

  charactersURL = 'http://localhost:3000/characters'
  quotesURL = 'http://localhost:3000/quotes'
  episodesURL = 'http://localhost:3000/epsiodes'

  componentDidMount() {
    fetch(this.charactersURL)
      .then(resp => resp.json())
      .then(characters => this.setState({ characters })
      )

    fetch(this.quotesURL)
      .then(resp => resp.json())
      .then(quotes => this.setState({ quotes })
      )

    fetch(this.episodesURL)
      .then(resp => resp.json())
      .then(episodes => this.setState({ episodes })
      )
  }


  render() {

    console.log('hi', this.state)

    return (
      <div className="App">
        <h1 className='header'>The Office</h1>
        <CharacterContainer key={this.state.characters} characters={this.state.characters} quotes={this.state.quotes} episodes={this.state.episodes} />
      </div>
    )
  }
}

