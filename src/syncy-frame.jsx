import React, { PropTypes } from 'react';
import Frame from './frame';

class SyncyFrame extends React.Comment {
  constructor() {
    super();
    this.state = {
      display: 'first',
    };
    this.onFrameBeforeLoad = this.onFrameBeforeLoad.bind(this);
    this.onFrameLoad = this.onFrameLoad.bind(this);
    this.renderFrame = this.renderFrame.bind(this);
  }

  componentWillReceiveProps({ nextId, nextSrc }) {
    const { id, src } = this.props;

    if (id === nextId && src === nextSrc) {
      return;
    }

    this.setState({ display: 'both' });
  }

  onFrameBeforeLoad(frameWindow) {
    this.props.onBeforeLoad(frameWindow);
  }

  onFrameLoad(display, frameWindow) {
    this.setState(display);
    this.props.onLoad(frameWindow);
  }

  renderFrame(display) {
    if (!display) {
      return null;
    }

    const { id, src } = this.props;

    return (
      <Frame
        id={id}
        src={src}
        onBeforeLoad={this.onFrameBeforeLoad()}
        onLoad={frameWindow => this.onFrameLoad('first', frameWindow)}
      />
    );
  }

  render() {
    const { display } = this.state;
    const displayFirst = display === 'first' || display === 'both';
    const displaySecond = display === 'second' || display === 'both';

    return (
      <div className="syncy-frame">
        {this.renderFrame(displayFirst)}
        {this.renderFrame(displaySecond)}
      </div>
    );
  }
}

Frame.defaultProps = {
  id: 'syncy-frame-instance',
  onBeforeLoad: function onBeforeLoad() {
  },
  onLoad: function onLoad() {
  },
};

Frame.propTypes = {
  id: PropTypes.string,
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  onBeforeLoad: PropTypes.func,
  onLoad: PropTypes.func,
};


export default SyncyFrame;
