import configLoader from './configLoader';

export default () => {
  return configLoader('./yaml/database.config.yaml');
};
