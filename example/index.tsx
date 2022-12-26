import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { Prodentifier } from '../.';

const App = () => {
  return (
    <div>
      <Prodentifier
        details={{
          'Commit ID': 'A1csdf3',
        }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
