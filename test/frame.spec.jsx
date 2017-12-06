import React from 'react';
import ReactDOM from 'react-dom';
import Frame from '../src/frame';

describe('Frame', () => {
  const parser = new DOMParser();
  let root;

  beforeEach(()=>{
    root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);
  });

  afterEach(()=>{
    document.body.removeChild(root);
  });

  it('dom is rendered', ()=> {
    const html = '<h1>Hello World</h1>';
    const dom = parser.parseFromString(html, 'text/html');

    ReactDOM.render(<Frame src={dom}/>, document.getElementById('root'));

    const iframe = document.getElementById('syncy-frame-instance');
    const frameWindow = iframe.contentWindow;
    const frameDocument = frameWindow.document;

    expect(frameDocument.body.innerHTML).toEqual(html);
  });

  it('didnt update with the same src', ()=> {
    const html = '<h1>Hello World</h1>';
    const dom = parser.parseFromString(html, 'text/html');
    const spy = jasmine.createSpy();

    ReactDOM.render(<Frame src={dom} onBeforeLoad={spy}/>, document.getElementById('root'));
    ReactDOM.render(<Frame src={dom} onBeforeLoad={spy}/>, document.getElementById('root'));

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('custom id is applied', ()=> {
    const html = '<h1>Hello World</h1>';
    const dom = parser.parseFromString(html, 'text/html');

    ReactDOM.render(<Frame id={'custom-frame'} src={dom}/>, document.getElementById('root'));

    const iframe = document.getElementById('custom-frame');

    expect(iframe).toBeDefined();
  });

  it('onBeforeLoad is called', ()=> {
    const html = '<h1>Hello World</h1>';
    const dom = parser.parseFromString(html, 'text/html');
    const spy = jasmine.createSpy();

    ReactDOM.render(<Frame src={dom} onBeforeLoad={spy}/>, document.getElementById('root'));

    const iframe = document.getElementById('syncy-frame-instance');

    expect(spy).toHaveBeenCalledWith(iframe);
  });

  it('onLoad is called', ()=> {
    const html = '<h1>Hello World</h1>';
    const dom = parser.parseFromString(html, 'text/html');
    const spy = jasmine.createSpy();

    ReactDOM.render(<Frame src={dom} onLoad={spy}/>, document.getElementById('root'));

    const iframe = document.getElementById('syncy-frame-instance');

    expect(spy).toHaveBeenCalledWith(iframe);
  });

  it('url is rendered', (done)=> {
    const url = 'http://default.eugeneford.info/';
    const testLocation = (iframe) => {
      const { src } = iframe;
      expect(src).toEqual(url);
      done();
    };

    ReactDOM.render(<Frame src={url} onLoad={testLocation}/>, document.getElementById('root'));
  });
});
