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
      .then(characters => characters.map(character => {
        return this.setState({ characters })
      }))

    fetch(this.quotesURL)
      .then(resp => resp.json())
      .then(quotes => quotes.map(quote => {
        return this.setState({ quotes })
      }))

    fetch(this.episodesURL)
      .then(resp => resp.json())
      .then(episodes => episodes.map(episode => {
        return this.setState({ episodes })
      }))
  }


  render() {
    return (
      <div className="App">
        <h1>The Office</h1>
        <CharacterContainer characters={this.state.characters} quotes={this.state.quotes} episodes={this.state.episodes} />
      </div>
    )
  }
}

