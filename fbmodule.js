var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

const {FB} = require('fb')
const http = require('http')

require('dotenv').config()

const run = async () => {
  FB.options({version: 'v7.0'})
  FB.setAccessToken(process.env.ACCESS_TOKEN)
  const data = (await FB.api(
    'act_25064918/insights?fields=campaign_id,campaign_name,account_currency,cpc,impressions&level=campaign&time_increment=7', 'get'))
  return data
}

const server = http.createServer()
server.on('request', async (req, res) => {  
  var fbData = await run()
  res.end(JSON.stringify(fbData))
})  
server.listen(3000)