import React from 'react';

import { withHocs } from './hocs';

import { Router } from '../core/router/Router';

function App(): React.JSX.Element {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default withHocs(App);
