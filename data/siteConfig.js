module.exports = {
  siteTitle: 'Mega Ultra Studios',
  siteDescription: 'Multimedia Production',
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
    name: 'Mega Ultra Studios',
    url: 'https://megaultra.space',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Feature Films',
          url: '/about-gatsby-starter-morning-dew',
        },
        {
          label: 'Short Films',
          url: '/how-to-install',
        },
        {
          label: 'Music Videos',
          url: '/how-to-install',
        },
        {
          label: 'Promotional Videos',
          url: '/how-to-install',
        },
      ],
    },
    {
      sectionName: 'More Info',
      links: [
        {
          label: 'Home',
          url: '/',
        },
        {
          label: 'About',
          url: '/about-mega-ultra-studios',
        },
        {
          label: 'Contact',
          url: 'https://www.maxpou.fr',
        },
        {
          label: 'Privacy Policy',
          url: '/privacy-policy',
        },
      ],
    },
  ],
}
