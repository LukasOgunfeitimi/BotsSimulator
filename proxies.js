const request = require('request');

const SOCKS4 = [
  "https://api.proxyscrape.com?request=getproxies&proxytype=socks4&timeout=10000&country=all"
]

const fetchProxies = (url) => {
  return new Promise((resolve, reject) => {
      request(url, (err, req, body) => {
          if (err) return reject(err);
          
          const proxies = body.replace(/\r/g, '').split('\n').filter(proxy => proxy); 
          resolve(proxies);
      });
  });
};
async function fetchSOCKS4() {
  let proxies = [];
  for (const api of SOCKS4) {
    proxies = [...proxies, ...await fetchProxies(api)]
  }
  return proxies;
}

/**
 *   const proxies = await(fetchSOCKS4());
   let workingProxies = [];
   for (const proxy of proxies) {
     const agent = new SocksProxyAgent("socks4://" + proxy)
     const res = await fetch('https://example.com', { agent });
     if (res.status === 200) workingProxies.push(agent);
     if (workingProxies.length > 20) break;
   }
 */

module.exports = {
  fetchSOCKS4,
}