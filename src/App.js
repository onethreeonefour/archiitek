import React, { Suspense } from 'react';
import Landing from './Components/Landing/Landing'
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>

      <div style={{ minHeight: 'calc(100vh - 80px)' }} >
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
