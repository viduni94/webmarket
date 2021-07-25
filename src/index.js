import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from 'App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.scss';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Route path="/" component={App} />
  </Router>,
  document.querySelector('#root'),
);
