import React from 'react';
import './playlist.css';
import TrackList from '../TrackList/TrackList';
import Track from '../Track/Track';

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        {console.log('Calling TrackList')}
        <TrackList tracks={this.props.playlistTracks}/>
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    )
  }
}

export default Playlist;
