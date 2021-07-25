import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from 'App';
import constants from 'utils/constants';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.scss';

ReactDOM.render(
  <Router>
    <Route path={constants.paths.home} component={App} />
  </Router>,
  document.querySelector('#root'),
);