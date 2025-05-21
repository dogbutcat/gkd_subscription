import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 1,
      name: '朋友圈广告',
      desc: '自动点击朋友圈广告的关闭按钮以及不感兴趣弹窗的直接关闭按钮',
      rules: [
        {
          key: 1,
          name: '广告关闭按钮1',
          fastQuery: true,
          activityIds: [
            'com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI',
          ],
          matches: 'LinearLayout[vid="jw"][clickable=true]',
          action: 'clickNode',
        },
        {
          key: 2,
          name: '广告关闭按钮2',
          fastQuery: true,
          activityIds: [
            'com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI',
          ],
          matches: 'LinearLayout[vid="n2t"][clickable=true]',
          preKeys: [1],
          action: 'clickNode',
        },
        {
          key: 3,
          name: '直接关闭按钮',
          activityIds: [
            'com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI',
          ],
          matches: 'TextView[text="直接关闭"][clickable=true]',
          preKeys: [1, 2],
          action: 'clickNode',
        },
      ],
    },
  ],
});
