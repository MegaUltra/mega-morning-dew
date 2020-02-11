module.exports = {
  siteTitle: 'Mega Ultra Studios',
  siteDescription: 'A Gatsby theme/starter to build lightning-fast websites',
  authorName: 'Mega Ultra Studios',
  twitterUsername: '',
  authorAvatar: 'avatar.png', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  Mega Ultra Studios creates unique original short films, music videos, live event videos, and promotional videos for independent performing artists and small business.
  `,
  siteUrl: 'https://megaultra.space/',
  disqusSiteUrl: 'https://megaultra.space/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '', // Note: it must *not* have a trailing slash.
  siteCover: 'cover.jpg', // file in content/images
  googleAnalyticsId: 'UA-158208347-1',
  background_color: '#CFC714',
  theme_color: '#0D0D0D',
  display: 'standalone',
  icon: 'content/images/logo.png',
  postsPerPage: 6,
  disqusShortname: '',
  headerTitle: 'Mega Ultra Studios',
  headerLinksIcon: 'logo.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'About',
      url: '/about-mega-ultra-studios',
    },
    {
      label: 'Installation',
      url: '/how-to-install',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'About',
          url: '/about-gatsby-starter-morning-dew',
        },
        {
          label: 'Installation',
          url: '/how-to-install',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/maxpou/gatsby-starter-morning-dew',
        },
        {
          label: 'Website',
          url: 'https://www.maxpou.fr',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/_maxpou',
        },
      ],
    },
  ],
}
