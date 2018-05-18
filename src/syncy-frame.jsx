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

    this.onDocumentFetch = this.onDocumentFetch.bind(this);
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
      freeze: active,
      active: 'all',
      frames: nextFrames,
    });
  }

  onDocumentFetch(frameDocument) {
    this.props.onDocumentFetch(frameDocument);
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

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState({
        active: index,
        activeHeight: iframe.offsetHeight,
        frames: nextFrames,
      });
      this.props.onLoad(iframe);
    }, this.props.transitionDelay);
  }

  renderFrames() {
    const { active, frames, freeze } = this.state;

    return frames.map((src, index) => {
      if (active !== index && active !== 'all') {
        return null;
      }

      const id = `syncy-frame-instance-${index}`;
      const isActive = active === index ? 'active ' : '';
      const isFreeze = freeze === index ? 'freeze' : '';


      return (
        <Frame
          id={id}
          className={isActive + isFreeze}
          key={id}
          src={src}
          onBeforeLoad={this.onFrameBeforeLoad}
          onLoad={iframe => this.onFrameLoad(iframe, index)}
          onDocumentFetch={this.onDocumentFetch}
        />
      );
    });
  }

  render() {
    const { width, height } = this.props;
    const { activeHeight, active } = this.state;
    let syncyHeight = active === 'all' ? activeHeight : height;

    return (
      <div className="syncy-frame" style={{ width, height: syncyHeight }}>
        {this.renderFrames()}
      </div>
    );
  }
}

SyncyFrame.defaultProps = {
  width: 'auto',
  height: 'auto',
  transitionDelay: 0,
  onBeforeLoad: function onBeforeLoad() {
  },
  onLoad: function onLoad() {
  },
  onDocumentFetch: function onDocumentFetch() {
  },
};

SyncyFrame.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  transitionDelay: PropTypes.number,
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  onBeforeLoad: PropTypes.func,
  onLoad: PropTypes.func,
  onDocumentFetch: PropTypes.func,
};


export default SyncyFrame;
