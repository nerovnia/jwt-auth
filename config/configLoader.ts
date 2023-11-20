import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

//const YAML_CONFIG_FILENAME = 'databaseConfiguration.yaml';

export default (configFile: string) => {
  console.log();
  return yaml.load(readFileSync(join(__dirname, configFile), 'utf8')) as Record<string, any>;
};