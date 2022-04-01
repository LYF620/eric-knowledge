module.exports = {
  base: '/',
  title: 'Eric的知识星球',
  description: 'Eric的知识星球',
  head: [
    ['link', { rel: 'icon', href: 'https://www.yfcloud.site/medias/logo.png' }],
  ],
  host: '0.0.0.0',
  port: 3000,
  themeConfig: {
    logo: 'https://www.yfcloud.site/medias/logo.png',
    nav: [
      { text: '🙋‍♂️ 欢迎👏🏻扩列', link: '/introduction' },
      {
        text: '点亮⭐不迷路',
        link: 'https://github.com/LYF620/eric-knowledge',
      },
    ],
    sidebar: [
      {
        title: '每日一题',
        path: '/dailyCode/part',
        children: [
          { title: 'part1', path: '/dailyCode/part' },
          { title: 'part2', path: '/dailyCode/part2' },
        ],
      },
      {
        title: '最佳实践',
        path: '/bestPractice/mobx',
      },
      {
        title: '源码学习',
        path: '/sourceCode/react',
      },
      {
        title: '开发小case',
        path: '/devlopment/case1',
      },
      {
        title: '个人面经',
      },
    ],
  },
}
