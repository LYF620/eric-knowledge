import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  title: 'Eric的前端知识星球',
  description: 'Eric的前端知识星球',
  theme: 'reco',
  head: [
    ['link', { rel: 'icon', href: 'https://www.yfcloud.site/medias/logo.png' }],
  ],
  themeConfig: {
    head: './public/logo.png',
    themePath: '../vuepress-theme-reco',
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    lastUpdatedText: '',
    // series 为原 sidebar
    series: {
      '/base/': [
        {
          text: 'js',
          children: ['/base/js.md'],
        },
        {
          text: 'ts',
          children: ['/base/js.md'],
        },
      ],
      '/sourceCode/': [
        {
          text: 'react',
          children: ['/sourceCode/react.md'],
        },
        {
          text: 'mobx',
          children: ['/sourceCode/react.md'],
        },
      ],
      '/bestPractice/': [
        {
          text: 'mobx',
          children: ['/bestPractice/mobx.md'],
        },
        {
          text: 'react',
          children: ['/bestPractice/mobx.md'],
        },
      ],
      '/exercise/': [
        {
          text: '每日一题',
          children: ['/exercise/blog1.md', '/exercise/blog2.md'],
        },
      ],
      '/devCase/': [
        {
          text: '开发小case',
          children: ['/devCase/onMyZsh.md'],
        },
      ],
    },
    navbar: [
      {
        text: '基础知识',
        link: '/base/js.md',
      },
      {
        text: '源码学习',
        link: '/sourceCode/react.md',
      },
      {
        text: '最佳实践',
        link: '/bestPractice/mobx.md',
      },
      { text: '每日一题', link: '/exercise/blog1.md' },
      { text: '开发小case', link: '/devCase/onMyZsh.md' },
      { text: '🙋‍♂️ 扩列滴滴', link: '' },
    ],
    // bulletin: {
    //   body: [
    //     {
    //       type: 'text',
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: 'font-size: 12px;',
    //     },
    //     {
    //       type: 'hr',
    //     },
    //     {
    //       type: 'title',
    //       content: 'QQ 群',
    //     },
    //     {
    //       type: 'text',
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: 'font-size: 12px;',
    //     },
    //     {
    //       type: 'hr',
    //     },
    //     {
    //       type: 'title',
    //       content: 'GitHub',
    //     },
    //     {
    //       type: 'text',
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: 'font-size: 12px;',
    //     },
    //     {
    //       type: 'hr',
    //     },
    //     {
    //       type: 'buttongroup',
    //       children: [
    //         {
    //           text: '打赏',
    //           link: '/docs/others/donate.html',
    //         },
    //       ],
    //     },
    //   ],
    // },
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  },
  // debug: true,
})
