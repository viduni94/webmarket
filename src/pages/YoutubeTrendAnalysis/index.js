import { memo, useState } from 'react';
import NavBar from 'components/NavBar';
import UseCaseList from 'components/UseCaseList';
import { useCases } from './data';
import GraphFour from './graphs/graphFour';
import GraphOne from './graphs/graphOne';
import GraphThree from './graphs/graphThree';
import GraphTwo from './graphs/graphTwo';
import styles from './youtubeTrendAnalysis.module.scss';

const YoutubeTrendAnalysis = () => {
  const [graphOne, showGraphOne] = useState(true);
  const [graphTwo, showGraphTwo] = useState(false);
  const [graphThree, showGraphThree] = useState(false);
  const [graphFour, showGraphFour] = useState(false);

  const onClickUseCase = id => {
    switch (id) {
      case 1:
        showGraphOne(true);
        showGraphTwo(false);
        showGraphThree(false);
        showGraphFour(false);
        break;
      case 2:
        showGraphOne(false);
        showGraphTwo(true);
        showGraphThree(false);
        showGraphFour(false);
        break;
      case 3:
        showGraphOne(false);
        showGraphTwo(false);
        showGraphThree(true);
        showGraphFour(false);
        break;
      case 4:
        showGraphOne(false);
        showGraphTwo(false);
        showGraphThree(false);
        showGraphFour(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <NavBar />
      <div>
        <h3 className={styles.title}>Youtube Trend Analysis for Marketing Campaigns</h3>
        <div className={`col-12 ${styles.container}`}>
          <div className={`col-3 ${styles.usecaseContainer}`}>
            <UseCaseList useCases={useCases} onClick={onClickUseCase} />
          </div>
          <div className={`col-8 ${styles.graphContainer}`}>
            {graphOne ? (
              <div style={{ width: '100%', height: '90%' }}>
                <GraphOne />
                <p style={{ marginTop: '2rem', textAlign: 'center', lineHeight: '1.5' }}>
                  Distribution of the Views of Videos
                </p>
              </div>
            ) : (
              ''
            )}
            {graphTwo ? (
              <div style={{ width: '100%', height: '90%' }}>
                <GraphTwo />
                <p style={{ marginTop: '2rem', textAlign: 'center', lineHeight: '1.5' }}>
                  Popular Trending Videos
                </p>
              </div>
            ) : (
              ''
            )}
            {graphThree ? (
              <div style={{ width: '100%', height: '90%' }}>
                <GraphThree />
                <p style={{ marginTop: '2rem', textAlign: 'center', lineHeight: '1.5' }}>
                  Most Disliked Videos
                </p>
              </div>
            ) : (
              ''
            )}
            {graphFour ? (
              <div style={{ width: '100%', height: '90%' }}>
                <GraphFour />
                <p style={{ marginTop: '2rem', textAlign: 'center', lineHeight: '1.5' }}>
                  Distribution of the Category of Videos
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

export default memo(YoutubeTrendAnalysis);
