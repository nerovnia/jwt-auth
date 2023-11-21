import configLoader from './configLoader';

export default () => {
  return configLoader('./yaml/tokens.config.yaml');
};
