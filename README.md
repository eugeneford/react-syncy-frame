<p align="center">
  <img src="https://raw.githubusercontent.com/eugeneford/react-syncy-frame/master/.github/syncy-frame.png" width="100" height="100">
</p>

<h3 align="center">
  React SyncyFrame
</h3>

<p align="center">
  React Component for seamless iframe reload
</p>

<p align="center">
  <a href="https://travis-ci.org/eugeneford/react-syncy-frame">
    <img src="https://travis-ci.org/eugeneford/react-syncy-frame.svg?branch=master" alt="Build Status">
  </a>
  <a href='https://coveralls.io/github/eugeneford/react-syncy-frame'>
    <img src='https://coveralls.io/repos/github/eugeneford/react-syncy-frame/badge.svg?v=1' alt='Coverage Status' />
  </a>
  <a href='https://www.npmjs.com/package/react-syncy-frame'>
    <img src='https://img.shields.io/npm/v/react-syncy-frame.svg?v=1' alt='NPM Version' />
  </a>
</p>

## Overview
SyncyFrame allows to make seamless transitions between dynamic iframe reloads. Under the hood it uses 2 iframes in order
to render current and next iframe states. Once next-state iframe is loaded, current one is deleted for performance optimization.

If you want to add some features or to suggest any idea, feel free - [contributions are always welcome](#contributing).

## How to Install
In order to use react-syncy-frame simply do:
```js
npm install --save react-syncy-frame
```

## Basic Example
SyncyFrame is able to render both external/local links and DocumentNode objects.

```jsx
import SyncyFrame from 'react-syncy-frame';

export default () => {
  return (<SyncyFrame width={'480px'} height={'320px'} src={'http://yourlink.com'}/>);
};
```

```jsx
import SyncyFrame from 'react-syncy-frame';

export default () => {
  const parser = new DOMParser();
  const dom = parser.parse('<h1>Hello World</h1>', 'text/html');
  return (<SyncyFrame width={'480px'} height={'320px'} src={dom}/>);
};
```

## Props
Property | Type | Description
-------- | ---- | ------------
src | String or DocumentNode | Target url or document which needs to be rendered. Required.
width | String | SyncyFrame width. Can be set in any css units eg. px, vw, vh, % etc. Auto by default.
height | String | SyncyFrame height. Can be set in any css units eg. px, vw, vh, % etc. Auto by default.
onBeforeLoad | function | Callback which gets called before target iframe is loaded. Receives an iframe element as an argument.
onLoad | function | Callback which gets called once target iframe is loaded. Receives an iframe element as an argument.

## Contributing
Contributions are always welcome.
Before contributing please read the [code of conduct](https://js.foundation/community/code-of-conduct) &
[search the issue tracker](https://github.com/eugeneford/react-syncy-frame/issues) (your issue may have already been discussed or fixed).

To contribute, follow next steps:
* Fork this repo
* Commit your changes
* Open a Pull Request

### Feature Requests
Feature requests should be submitted in the issue tracker, with a description
of the expected behavior & use case, where they'll remain closed until sufficient interest (e.g. :+1: reactions).
Before submitting a feature request, please search for similar ones in the closed issues.

## License
Released under the [MIT License](https://github.com/eugeneford/collit/blob/master/LICENSE)
