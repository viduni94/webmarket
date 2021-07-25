import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageLoader from 'components/PageLoader';
import Home from 'pages/Home';
import ProductPricing from 'pages/ProductPricing';
import ProductRecommendations from 'pages/ProductRecommendations';
import YoutubeTrendAnalysis from 'pages/YoutubeTrendAnalysis';

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/product-recommendations" component={ProductRecommendations} />
        <Route path="/trend-analysis" component={YoutubeTrendAnalysis} />
        <Route path="/price-analysis" component={ProductPricing} />
        <Route path="/" component={Home} />
      </Switch>
    </Suspense>
  );
}

export default App;
