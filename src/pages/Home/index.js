import { memo } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import logoLarge from 'assets/images/logo-large.png';
import pageStyles from 'pages/pages.module.scss';
import styles from './home.module.scss';

const Home = () => {
  return (
    <>
      <div className={cx(pageStyles.container, styles.main)}>
        <div className={styles.textContainer}>
          <h2>Hey There!</h2>
          <h3>We Are</h3>
          <img style={{ width: '300px', height: '190px' }} src={logoLarge} alt="logo-large" />
          <p className={styles.tag}>
            We facilitate buying and delivering
            <br /> Amazon products for Sri Lanka
          </p>
          <div className={styles.linksList}>
            <p>
              <b>Check Out Our Big Data Analysis on Amazon Products</b>
            </p>
            <p>
              (We use a daily running script to obtain data
              <br /> to our main application)
            </p>
            <br />
            <br />
            <br />
            <Link to="/product-recommendations">Product Recommendations</Link>
            <br />
            <br />
            <br />
            <Link to="/trend-analysis">Trend Analysis</Link>
            <br />
            <br />
            <br />
            <Link to="/price-analysis">Price Analysis</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Home);
