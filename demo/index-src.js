import React from 'react';
import ReactDOM from 'react-dom';
import SyncyFrame from '../src/react-syncy-frame';

class Container extends React.Component {
  constructor(){
    super();
    this.state = {
      active: 0,
      src: ['https://devitems.com/preview/furnish/index.html', 'https://livedemo00.template-help.com/wt_58888_v10/']
    };
    this.changeSrc = this.changeSrc.bind(this);
  }

  changeSrc() {
    const { active } = this.state;
    this.setState({ active: active ? 0 : 1});
  }

  render() {
    const { src, active } = this.state;
    return (
      <div>
        <button onClick={this.changeSrc}>Render new Source</button>
        <SyncyFrame width={'480px'} height={'320px'} src={src[active]}/>
      </div>
    );
  }
}

ReactDOM.render(<Container/>, document.getElementById('root'));
