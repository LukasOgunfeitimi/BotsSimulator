const fs = require('fs')
const agents = fs.readFileSync('./core/agents.txt', 'utf-8').split('\n').filter(a => !a.includes('iPad'))
console.log(agents[Math.floor(Math.random() * agents.length)])