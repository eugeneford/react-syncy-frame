import React, { PropTypes } from 'react';

class Frame extends React.Component {
  constructor() {
    super();
    this.initCallbacks = this.initCallbacks.bind(this);
    this.injectDOM = this.injectDOM.bind(this);
  }

  shouldComponentUpdate({ nextId, nextSrc }) {
    const { id, src } = this.props;
    return id !== nextId || src !== nextSrc;
  }

  initCallbacks(iframe) {
    const element = iframe;
    const { contentWindow } = element;
    const { src, onBeforeLoad, onLoad } = this.props;

    onBeforeLoad(contentWindow);

    // Inject DOM if src is not a string
    if (src && typeof src !== 'string') {
      this.injectDOM(contentWindow);
    }

    contentWindow.addEventListener('load', () => {
      onLoad(contentWindow);
      element.style.zIndex = 1;
    });
  }

  injectDOM(contentWindow) {
    const { document } = contentWindow;
    const dom = this.props.src;

    document.open();
    document.write(dom.documentElement.outerHTML);
    document.close();
  }

  render() {
    const { id, src } = this.props;
    const srcLink = typeof src === 'string' ? src : 'about:blank';
    const key = `${id}_${new Date().getTime()}`;

    return (<iframe
      key={key}
      id={id}
      title={id}
      src={srcLink}
      ref={this.initCallbacks}
      className="syncy-frame-window"
      allowFullScreen="true"
    />);
  }
}

Frame.defaultProps = {
  id: 'frame-instance',
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

export default Frame;
