const {FB} = require('fb');
require('dotenv').config()

const run = async () => {
  FB.options({version: 'v7.0'})
  FB.setAccessToken(process.env.ACCESS_TOKEN);
  console.log((await FB.api('act_25064918/insights?fields=campaign_id,campaign_name,impressions&level=campaign', 'get')))
}

Promise.resolve(run()).catch(console.log).finally(process.exit)