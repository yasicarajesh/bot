import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router' ;
import { ConnectedRouter } from 'connected-react-router';

import Header from './components/layouts/header';
import Sidebar from './components/layouts/sidebar';
import Breadcrumb from './components/layouts/breadcrumb';
// import Dashboard from './components/dashboard';

    // AdminSettings management
import AdminSettings from './components/settings/adminsettings';


// middleware configuration
import configureStore, { history } from './configureStore';
const store = configureStore();

function App() {
  return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
           <Header/>
           <Sidebar/>
            <Switch>
               <div className="content-wrapper">
                 <section className="content">
                 <Breadcrumb />
                     <div className="container-fluid">
                        <Route path="/adminSettings" component={AdminSettings} />
                     </div>
                  </section>
               </div>
            </Switch>
        </ConnectedRouter>
      </Provider>
  );
}

export default App;
