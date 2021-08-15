
const express = require('express')
const app = express()
const port = 4000
const axios = require('axios')
const xml2js = require('xml2js')
const router = express.Router();
var parser = new xml2js.Parser();
const cors = require('cors');

 
const corsOptions = {
  origin: "http://localhost:3000 ",
  credentials: true
}
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  axios.get('https://nip.kdca.go.kr/irgd/cov19stats.do?list=sido').then(data => {
 

    if(data.data){
      parser.parseString(data.data, function (err, result) {
        res.status(200).json(result.response.body[0].items[0].item);
      });
    }else{
      res.status(404).json('Not found');
    }
  })
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
 