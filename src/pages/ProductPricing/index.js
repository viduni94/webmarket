import { memo, useState } from 'react';
import NavBar from 'components/NavBar';
import UseCaseList from 'components/UseCaseList';
import { useCases } from './data';
import GraphOne from './graphs/graphOne';
import GraphTwo from './graphs/graphTwo';
import styles from './productPricing.module.scss';

const ProductPricing = () => {
  const [graphOne, showGraphOne] = useState(true);
  const [graphTwo, showGraphTwo] = useState(false);

  const onClickUseCase = id => {
    switch (id) {
      case 1:
        showGraphOne(true);
        showGraphTwo(false);
        break;
      case 2:
        showGraphOne(false);
        showGraphTwo(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <NavBar />
      <div>
        <h3 className={styles.title}>Product Pricing Analysis</h3>
        <div className={`col-12 ${styles.container}`}>
          <div className={`col-3 ${styles.usecaseContainer}`}>
            <UseCaseList useCases={useCases} onClick={onClickUseCase} />
          </div>
          <div className={`col-8 ${styles.graphContainer}`}>
            {graphOne ? (
              <div style={{ width: '100%', height: '90%' }}>
                <GraphOne />
                <p style={{ marginTop: '2rem', textAlign: 'center', lineHeight: '1.5' }}>
                  Product count of 14 categories
                </p>
              </div>
            ) : (
              ''
            )}
            {graphTwo ? (
              <div style={{ width: '100%', height: '90%' }}>
                <GraphTwo />
                <p style={{ marginTop: '2rem', textAlign: 'center', lineHeight: '1.5' }}>
                  Product pricing ranges for categories
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

export default memo(ProductPricing);
