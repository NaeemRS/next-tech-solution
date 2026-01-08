/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.nextechservicessolutions.com", 
  generateRobotsTxt: true,            
  sitemapSize: 7000,                 
  changefreq: "daily",             
  priority: 0.7,                     
  exclude: ["/api/*"],                
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",                   
      },
    ],
  },
};
