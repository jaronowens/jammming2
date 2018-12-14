import React from 'react';
import './track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);

  }

  renderAction(isRemoval) {
    if (isRemoval === true) {
      return <a className="Track-action" onClick={this.removeTrack}>-</a>;
    } else {
      return <a className="Track-action" onClick={this.addTrack}>+</a>;
    }
  }

  addTrack(e) {
    this.props.onAdd(this.props.tracks);
  }

  removeTrack(e) {
    this.props.onRemove(this.props.tracks);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.tracks.name}</h3>
          <p>{this.props.tracks.artist} | {this.props.tracks.album}</p>
        </div>
        {this.renderAction(this.props.isRemoval)}
      </div>
    )
  }
}
export default Track;
