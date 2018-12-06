import React from 'react';
import './track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
  }

  renderAction(isRemoval) {
    if (isRemoval === true) {
      return '-';
    } else {
      return '+';
    }
  }

  addTrack() {
    console.log('In addTrack in Track.js. value of this.props.track:' + this.props.track)
    this.props.onAdd(this.props.tracks);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.tracks.name}</h3>
          <p>{this.props.tracks.artist} | {this.props.tracks.album}</p>
        </div>
        <a className="Track-action" onClick={this.addTrack}>{this.renderAction(true)}</a>
      </div>
    )
  }
}
export default Track;
