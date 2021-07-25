import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageLoader from 'components/PageLoader';
import Home from 'pages/Home';
import ProductRecommendations from 'pages/ProductRecommendations';
import constants from 'utils/constants';

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route exact path={constants.paths.home} component={Home} />
        <Route exact path="/product-recommendations" component={ProductRecommendations} />
        <Route exact path="/trend-analysis" component={Home} />
      </Switch>
    </Suspense>
  );
}

export default App;
