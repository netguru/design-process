module.exports = {
  title: 'Design Process For Pros',
  description: 'Live E-Book with useful informations about Design Process',
  theme: 'live-ebook',
  base: process.env.NODE === 'production' ? '/design-process/' : '/',
  themeConfig: {
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
