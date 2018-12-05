import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import Playlist from './Components/Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{
        name: 'Impossible to Say',
        artist: 'London Elektricity',
        album: 'Why Are We Here?',
        id: 'sample ID'
      }],
      tracks: [
        {
          name: 'Eple',
          artist: 'Royksopp',
          album: 'Remind Me',
          id: 'sample ID 2'
        },
        {
          name: 'Nyx',
          artist: 'Monitor 66',
          album: 'Vitae',
          id: 'sample ID 3'
        }
      ]
    };
  }

  addTrack(track) {
    console.log('Calling addTrack. Current value of track: ' + track);
    this.addTrack = this.addTrack.bind(this);
    if(track.id === this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      this.setState({tracks: track});
    }
  }

  render() {

    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            {console.log('Calling SearchResults')}
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            {console.log('Calling Playlist')}
            <Playlist playlistName='Hard Codin' playlistTracks={this.state.tracks}/>
          </div>
        </div>
      </div>
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>*/
    );
  }
}

export default App;
