import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.weico.international',
  name: '微博轻享版',
  groups: [
    {
      key: 1,
      name: '列表广告',
      desc: '列表塞入未关注推广微博',
      rules: [
        {
          key: 1,
          name: '关闭广告按钮',
          activityIds: [
            'com.weico.international.activity.MainFragmentActivity',
          ],
          matches: '[name$="ImageView" && desc="关闭广告" && clickable=true]',
          action: 'clickNode',
          snapshotUrls: 'https://i.gkd.li/i/20155576',
        },
        {
          key: 2,
          name: '不感兴趣按钮',
          activityIds: [
            'com.weico.international.activity.MainFragmentActivity',
          ],
          matches:
            '@[name$="View" && clickable=true] > TextView[text="不感兴趣"]',
          action: 'clickNode',
          preKeys: [1],
          snapshotUrls: 'https://i.gkd.li/i/20156511',
        },
      ],
    },
  ],
});
