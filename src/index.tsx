import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

type Foo = JSX.IntrinsicAttributes;

ReactDOM.render(
  <App message="Hello, React!" />,
  document.getElementById('root')
);
