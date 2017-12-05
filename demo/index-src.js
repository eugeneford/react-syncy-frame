import React from 'react';
import ReactDOM from 'react-dom';
import SyncyFrame from '../src/index';

class Container extends React.Component {
  constructor(){
    super();

    const parser = new DOMParser();
    const dom = parser.parseFromString('<h1>Hello World</h1>', 'text/html');

    this.state = {
      active: 0,
      src: ['http://default.eugeneford.info/', dom]
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
        <button onClick={this.changeSrc}>{message}</button>
        <SyncyFrame width={'480px'} height={'320px'} src={src[active]}/>
      </div>
    );
  }
}

ReactDOM.render(<Container/>, document.getElementById('root'));
