/* eslint-disable import/prefer-default-export */
export const useCases = [
  {
    id: 1,
    name: 'Distribution of overall ratings for Amazon products',
  },
  {
    id: 2,
    name: 'Number of Reviews Given by Unique Users',
  },
  {
    id: 3,
    name: 'Review Count by Month',
  },
  {
    id: 4,
    name: 'Popular Products Based on Average Rating',
  },
  {
    id: 5,
    name: 'Distribution of Length of Reviews vs Helpful Count',
  },
];

// Key is rating, value is total_no_of_reviews
export const graphOneData = [
  {
    key: 1,
    value: 52268,
  },
  {
    key: 2,
    value: 29769,
  },
  {
    key: 3,
    value: 42640,
  },
  {
    key: 4,
    value: 80655,
  },
  {
    key: 5,
    value: 363122,
  },
];

// Name is user ID
export const graphTwoData = [
  {
    name: 'A3OXHLG6DIBRW8',
    total_no_of_reviews: 448,
  },
  {
    name: 'A1YUL9PCJR3JTY',
    total_no_of_reviews: 421,
  },
  {
    name: 'AY12DBB0U420B',
    total_no_of_reviews: 389,
  },
  {
    name: 'A281NPSIMI1C2R',
    total_no_of_reviews: 365,
  },
  {
    name: 'A1Z54EM24Y40LL',
    total_no_of_reviews: 256,
  },
  {
    name: 'A1TMAVN4CEM8U8',
    total_no_of_reviews: 204,
  },
  {
    name: 'A2MUGFV2TDQ47K',
    total_no_of_reviews: 201,
  },
  {
    name: 'A3TVZM3ZIXG8YW',
    total_no_of_reviews: 199,
  },
  {
    name: 'A3PJZ8TU8FDQ1K',
    total_no_of_reviews: 178,
  },
  {
    name: 'AQQLWCMRNDFGI',
    total_no_of_reviews: 176,
  },
];

// Name is month, value is total_no_of_reviews
export const graphThreeData = [
  {
    name: 'Jan',
    total_no_of_reviews: 50367,
  },
  {
    name: 'Feb',
    total_no_of_reviews: 45356,
  },
  {
    name: 'March',
    total_no_of_reviews: 48367,
  },
  {
    name: 'April',
    total_no_of_reviews: 44473,
  },
  {
    name: 'May',
    total_no_of_reviews: 46226,
  },
  {
    name: 'June',
    total_no_of_reviews: 44479,
  },
  {
    name: 'July',
    total_no_of_reviews: 48419,
  },
  {
    name: 'Aug',
    total_no_of_reviews: 50526,
  },
  {
    name: 'Sept',
    total_no_of_reviews: 55740,
  },
  {
    name: 'Oct',
    total_no_of_reviews: 55762,
  },
  {
    name: 'Nov',
    total_no_of_reviews: 36986,
  },
  {
    name: 'Dec',
    total_no_of_reviews: 41753,
  },
];
