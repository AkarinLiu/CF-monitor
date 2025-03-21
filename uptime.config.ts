const pageConfig = {
  // Title for your status page
  title: "阿卡林刘の状态页面",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/AkarinLiu', label: 'GitHub' },
    { link: 'https://www.akarinliu.com/', label: 'Blog' },
    { link: 'mailto:im@akarinliu.com', label: '发送邮件', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    {
      id: 'Blog',
      name: '博客 · www.akarinliu.com',
      method: 'GET',
      target: 'https://www.akarinliu.com',
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'rss-reader',
      name: 'RSS 阅读器 · rss.akarinliu.com',
      method: 'GET',
      target: 'https://rss.akarinliu.com',
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'rss-reader',
      name: '论坛 · forum.akarinliu.com',
      method: 'GET',
      target: 'https://forum.akarinliu.com',
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    }
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
