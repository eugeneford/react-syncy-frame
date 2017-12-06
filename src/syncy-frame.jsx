import React from 'react';
import PropTypes from 'prop-types';
import Frame from './frame';

class SyncyFrame extends React.Component {
  constructor(props) {
    super();
    this.state = {
      active: 0,
      frames: [props.src, null],
    };
    this.onFrameBeforeLoad = this.onFrameBeforeLoad.bind(this);
    this.onFrameLoad = this.onFrameLoad.bind(this);
    this.renderFrames = this.renderFrames.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const nextSrc = nextProps.src;
    const { active, frames } = this.state;
    const { src } = this.props;

    if (src === nextSrc) {
      return;
    }

    const nextFrames = [
      active === 0 ? frames[0] : nextSrc,
      active === 1 ? frames[1] : nextSrc,
    ];

    this.setState({
      active: 'all',
      frames: nextFrames,
    });
  }

  onFrameBeforeLoad(iframe) {
    this.props.onBeforeLoad(iframe);
  }

  onFrameLoad(element, index) {
    const { frames } = this.state;
    const iframe = element;
    const nextFrames = [
      index === 0 ? frames[0] : null,
      index === 1 ? frames[1] : null,
    ];

    iframe.style.zIndex = 1;

    this.setState({ active: index, frames: nextFrames });
    this.props.onLoad(iframe);
  }

  renderFrames() {
    const { active, frames } = this.state;

    return frames.map((src, index) => {
      if (active !== index && active !== 'all') { return null; }

      const id = `syncy-frame-instance-${index}`;

      return (
        <Frame
          id={id}
          key={id}
          src={src}
          onBeforeLoad={this.onFrameBeforeLoad}
          onLoad={iframe => this.onFrameLoad(iframe, index)}
        />
      );
    });
  }

  render() {
    const { width, height } = this.props;

    return (
      <div className="syncy-frame" style={{ width, height }}>
        {this.renderFrames()}
      </div>
    );
  }
}

SyncyFrame.defaultProps = {
  width: 'auto',
  height: 'auto',
  onBeforeLoad: function onBeforeLoad() {
  },
  onLoad: function onLoad() {
  },
};

SyncyFrame.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  onBeforeLoad: PropTypes.func,
  onLoad: PropTypes.func,
};


export default SyncyFrame;
