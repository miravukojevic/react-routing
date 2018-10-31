import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import { BrowserRouter as Router, Route, Link, withRouter  } from "react-router-dom";
const AppWithHistory = () => withRouter(({history}) => ( <App />))


ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

serviceWorker.unregister();
