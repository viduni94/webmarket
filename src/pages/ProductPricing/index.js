import { memo } from 'react';
import NavBar from 'components/NavBar';
import GraphOne from './graphs/graphOne';
import styles from './productPricing.module.scss';

const ProductPricing = () => {
  return (
    <>
      <NavBar />
      <div>
        <h3 className={styles.title}>Product Pricing Analysis</h3>
        <div className={`col-12 ${styles.container}`}>
          <div className={`col-8 ${styles.graphContainer}`}>
            <div style={{ width: '100%', height: '90%' }}>
              <GraphOne />
              <p style={{ marginTop: '2rem', textAlign: 'center', lineHeight: '1.5' }}>
                Product count of 14 categories
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ProductPricing);
