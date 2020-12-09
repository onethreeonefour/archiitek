import React, { Suspense } from 'react';
import Landing from './Components/Landing/Landing'
import Footer from './Components/Utilities/Footer'
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>

      <div style={{ minHeight: 'calc(100vh - 80px)' }} >
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
