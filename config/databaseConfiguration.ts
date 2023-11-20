import configLoader from './configLoader';

export default () => {
  return configLoader('databaseConfiguration.yaml');
};
