import React from 'react';
import PropTypes from 'prop-types';

class Frame extends React.Component {
  constructor() {
    super();
    this.injectDOM = this.injectDOM.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const nextSrc = nextProps.src;
    const { src } = this.props;
    return src !== nextSrc;
  }

  injectDOM(contentWindow) {
    const { document } = contentWindow;
    const dom = this.props.src;

    document.open();
    document.write(dom.documentElement.outerHTML);
    document.close();
  }

  componentDidMount() {
    const iframe = this.iframe;
    const { contentWindow } = iframe;
    const { src, onBeforeLoad } = this.props;

    onBeforeLoad(iframe);

    // Inject DOM if src is not a string
    if (src && typeof src !== 'string') {
      this.injectDOM(contentWindow);
    }
  }

  render() {
    const { id, src, onLoad } = this.props;
    const srcLink = typeof src === 'string' ? src : 'about:blank';

    return (<iframe
      id={id}
      title={id}
      src={srcLink}
      ref={iframe => this.iframe = iframe}
      className="syncy-frame-window"
      allowFullScreen="true"
      onLoad={()=> onLoad(this.iframe)}
    />);
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

export default Frame;
