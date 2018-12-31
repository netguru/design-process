module.exports = {
  title: 'Design Process by Netguru',
  description: 'Live E-Book with useful informations about Design Process',
  theme: 'live-ebook',
  base: process.env.NODE_ENV === 'production' ? '/design-process/' : '/',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],
  ga: 'UA-259047-66',

  themeConfig: {
    bookTitle: 'Design Process For Pros',
    baseUrl: 'https://design-process.netguru.co',
    exitUrl: 'https://www.netguru.co/design-process',
    company: {
      name: 'Netguru',
      url: 'https://www.netguru.co',
      logo: '/images/netguru.svg'
    },
    twitter: 'netguru',
  },

  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  }
}
