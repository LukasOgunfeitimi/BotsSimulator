const request = require('request')
request('https://api.proxyscrape.com?request=getproxies&proxytype=socks5&timeout=10000&country=all', (err, req, body) => {
   var x = (body.replace(/\r/g, '').split('\n').filter(p => p.length > 1))
   x.forEach(ff => {
       console.log(ff)
   });
});