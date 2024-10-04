const request = require("request")
request('https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/socks4.txt', (err, req, body) => {
  body.replace(/\r/g, '').split('\n').forEach((proxy, index) => {
      setTimeout(() => {
          if (index > 500) return
          console.log(proxy)
      }, index * 50);
  });
});