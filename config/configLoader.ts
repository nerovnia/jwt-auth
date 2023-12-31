import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

export default (configFile: string) => {
  return yaml.load(readFileSync(join(__dirname, configFile), 'utf8')) as Record<string, any>;
};