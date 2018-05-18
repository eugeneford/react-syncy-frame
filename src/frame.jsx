import React from 'react';
import PropTypes from 'prop-types';

class Frame extends React.Component {
  constructor() {
    super();
    this.injectDOM = this.injectDOM.bind(this);
  }

  componentDidMount() {
    const { iframe } = this;
    const { contentWindow } = iframe;
    const { src, onBeforeLoad } = this.props;

    onBeforeLoad(iframe);

    // Inject DOM if src is not a string
    if (src && typeof src !== 'string') {
      this.injectDOM(contentWindow);
    }
  }

  injectDOM(contentWindow) {
    const { document } = contentWindow;
    const { onDocumentFetch, src } = this.props;

    document.open();
    document.write(src.documentElement.outerHTML);
    document.close();

    onDocumentFetch(document);
  }

  render() {
    const { id, src, onLoad, className } = this.props;
    const srcLink = typeof src === 'string' ? src : 'about:blank';
    const frameClass = className ? 'syncy-frame-window ' + className : 'syncy-frame-window';

    return (<iframe
      id={id}
      title={id}
      src={srcLink}
      ref={(iframe) => {
        this.iframe = iframe;
      }}
      className={frameClass}
      allowFullScreen="true"
      onLoad={() => {
        onLoad(this.iframe);
      }}
    />);
  }
}

Frame.defaultProps = {
  id: 'syncy-frame-instance',
  className: '',
  onBeforeLoad: function onBeforeLoad() {
  },
  onLoad: function onLoad() {
  },
  onDocumentFetch: function onDocumentFetch() {
  },
};

Frame.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  onBeforeLoad: PropTypes.func,
  onLoad: PropTypes.func,
  onDocumentFetch: PropTypes.func,
};

export default Frame;
