import React from 'react';
import ReactDOM from 'react-dom';
import SyncyFrame from '../src/index';

class Container extends React.Component {
  constructor(){
    super();

    const parser = new DOMParser();
    const dom = parser.parseFromString('<html style="background: #0f0;"><h1>Hello World</h1></html>', 'text/html');

    this.state = {
      active: 0,
      src: ['http://eugeneford.info/', dom],
    };
    this.changeSrc = this.changeSrc.bind(this);
  }

  changeSrc() {
    const { active } = this.state;
    this.setState({ active: active ? 0 : 1});
  }

  render() {
    const { src, active } = this.state;
    const message = typeof src[active] === "string" ? 'Render DOM' : 'Render URL';
    return (
      <div>
        <button style={{height: 48, position: "fixed", top: 30, right: 30}} onClick={this.changeSrc}>{message}</button>
        <div style={{ display: "inline-block", padding: 4, background: '#f00' }}>
          <SyncyFrame width={'480px'} height={'320px'} transitionDelay={1000} src={src[active]}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Container/>, document.getElementById('root'));
