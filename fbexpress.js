var express = require('express')
var cors = require('cors')
const {FB} = require('fb')
const http = require('http')
require('dotenv').config()

const app = express()
app.use(cors())

const run = async () => {
    FB.options({version: 'v7.0'})
    FB.setAccessToken(process.env.ACCESS_TOKEN)
    const data = (await FB.api(
      'act_25064918/insights?fields=campaign_id,campaign_name,account_currency,cpc,impressions&level=campaign&time_increment=7', 'get'))
    return data
}

app.get('/', async (req, res) => {
    var fbData = await run()   
    res.send(JSON.stringify(fbData))
})

const PORT = 3001
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})