import { memo } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import ReactLogo from 'components/ReactLogo';
import constants from 'utils/constants';
import messages from 'utils/messages';
import pageStyles from 'pages/pages.module.scss';
import styles from './home.module.scss';

const Home = () => {
  return (
    <>
      <div className={cx(pageStyles.container, styles.main)}>
        <ReactLogo />
        <h2>{messages.common.title}</h2>
        <p>{messages.mainPage.getStarted}</p>
        <p>
          {messages.mainPage.visitThe}
          <a target="_blank" rel="noreferrer" href={constants.links.readme}>
            {messages.mainPage.readme}
          </a>
          {messages.mainPage.moreInfo}
        </p>
        <Link to="/product-recommendations">Product Recommendations</Link>
      </div>
    </>
  );
};

export default memo(Home);
