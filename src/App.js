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
        <Route path="/product-recommendations" component={ProductRecommendations} />
        <Route path="/trend-analysis" component={Home} />
        <Route path={constants.paths.home} component={Home} />
      </Switch>
    </Suspense>
  );
}

export default App;
