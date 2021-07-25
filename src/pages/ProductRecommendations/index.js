import { memo, useState } from 'react';
import NavBar from 'components/NavBar';
import UseCaseList from 'components/UseCaseList';
import { useCases } from './data';
import GraphFive from './graphs/graphFive';
import GraphFour from './graphs/graphFour';
import GraphOne from './graphs/graphOne';
import GraphThree from './graphs/graphThree';
import GraphTwo from './graphs/graphTwo';
import styles from './productRecommendations.module.scss';

const ProductRecommendations = () => {
  const [graphOne, showGraphOne] = useState(true);
  const [graphTwo, showGraphTwo] = useState(false);
  const [graphThree, showGraphThree] = useState(false);
  const [graphFour, showGraphFour] = useState(false);
  const [graphFive, showGraphFive] = useState(false);

  const onClickUseCase = id => {
    switch (id) {
      case 1:
        showGraphOne(true);
        showGraphTwo(false);
        showGraphThree(false);
        showGraphFour(false);
        showGraphFive(false);
        break;
      case 2:
        showGraphOne(false);
        showGraphTwo(true);
        showGraphThree(false);
        showGraphFour(false);
        showGraphFive(false);
        break;
      case 3:
        showGraphOne(false);
        showGraphTwo(false);
        showGraphThree(true);
        showGraphFour(false);
        showGraphFive(false);
        break;
      case 4:
        showGraphOne(false);
        showGraphTwo(false);
        showGraphThree(false);
        showGraphFour(true);
        showGraphFive(false);
        break;
      case 5:
        showGraphOne(false);
        showGraphTwo(false);
        showGraphThree(false);
        showGraphFour(false);
        showGraphFive(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <NavBar />
      <div>
        <h3 className={styles.title}>Product Recommendations for Customers</h3>
        <div className={`col-12 ${styles.container}`}>
          <div className={`col-3 ${styles.usecaseContainer}`}>
            <UseCaseList useCases={useCases} onClick={onClickUseCase} />
          </div>
          <div className={`col-8 ${styles.graphContainer}`}>
            {graphOne ? (
              <div style={{ width: '100%', height: '80%' }}>
                <GraphOne />
                <p style={{ marginTop: '2rem', textAlign: 'center', lineHeight: '1.5' }}>
                  Big data analysis to identify whether Customer consider Amazon products as
                  products of good quality. We use this metric to advertise Amazon products to our
                  customers. If customers are convinced to buy good quality Amazon products, it
                  results in the growth of WebMarket.
                </p>
                <p style={{ marginTop: '2rem', textAlign: 'center' }}>
                  Conclusion - 64% of the reviews have 5 stars. Hence Amazon products are considered
                  of good quality.
                </p>
              </div>
            ) : (
              ''
            )}
            {graphTwo ? (
              <div style={{ width: '100%', height: '80%' }}>
                <GraphTwo />
                <p style={{ marginTop: '2rem', textAlign: 'center', lineHeight: '1.5' }}>
                  The analysis of unique user reviews identified <b>256059 unique user reviews</b>.
                  The graph displays the top 10 unique users who had most number of reviews.
                </p>
                <p style={{ marginTop: '1rem', textAlign: 'center', lineHeight: '1.5' }}>
                  We use this analysis to explore the large user pool who purchases Amazon products.
                  The results shows us that customers take the time to leave a review repeatedly
                  after they purchase products. This helps with product recommendations to our own
                  customers.
                </p>
              </div>
            ) : (
              ''
            )}
            {graphThree ? (
              <div style={{ width: '100%', height: '80%' }}>
                <GraphThree />
                <p style={{ marginTop: '2rem', textAlign: 'center', lineHeight: '1.5' }}>
                  The analysis of best months is important to analyse discounts provided by Amazon
                  and it&apos;s vendors.
                </p>
                <p style={{ marginTop: '1rem', textAlign: 'center', lineHeight: '1.5' }}>
                  We use this analysis to explore keep an eye out for exciting offers that we can
                  promote to our customers. We have identified that the Sri Lankan buyers are more
                  eager to purchase when there is an offer. Therefore, this analysis is important
                  for sales growth of WebMarket.
                </p>
              </div>
            ) : (
              ''
            )}
            {graphFour ? (
              <div style={{ width: '100%', height: '80%' }}>
                <GraphFour />
                <p style={{ marginTop: '2rem', textAlign: 'center', lineHeight: '1.5' }}>
                  The analysis of average rating for products help us identify the best selling
                  products based on customer satisfaction.
                </p>
                <p style={{ marginTop: '1rem', textAlign: 'center', lineHeight: '1.5' }}>
                  We use this analysis to conduct direct product advertising and recommendations to
                  users. We have identified that there are a large number of products on Amazon
                  which has an average rating of 5, which proves the quality of products sold on
                  Amazon. Since we are source Amazon products to Sri Lanka, this metric is really
                  important for customer attraction for WebMarket too.
                </p>
              </div>
            ) : (
              ''
            )}
            {graphFive ? (
              <div style={{ width: '100%', height: '80%' }}>
                <GraphFive />
                <p style={{ marginTop: '2rem', textAlign: 'center', lineHeight: '1.5' }}>
                  The analysis of length of review vs helpful tags count showcases the importance
                  of a detailed review of a product for potential customers..
                </p>
                <p style={{ marginTop: '1rem', textAlign: 'center', lineHeight: '1.5' }}>
                  With this insight, we recommend quality products to our customers and once they purchase it,
                  we advise them to leave their valuable feedback about the product too. This has helped our
                  analysis on products as we can make our recommendations better based on user feedback we get.
                </p>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ProductRecommendations);
