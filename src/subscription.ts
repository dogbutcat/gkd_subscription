import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 987654321,
  name: 'dbc的GKD订阅',
  version: 0,
  author: 'dogbutcat',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/dogbutcat/gkd_subscription/issues/new',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
