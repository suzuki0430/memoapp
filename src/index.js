import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { MemoProvider } from './providers/memoProvider';

ReactDOM.render(
  <MemoProvider>
    <App />
  </MemoProvider>,
  document.getElementById('root')
);
