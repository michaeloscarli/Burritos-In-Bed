var express = require('express');
var yelp = require("yelp").createClient({
  consumer_key: "9pBUZ8qcYfEtCwbrXnvrAw", 
  consumer_secret: "FHnvTIDsZvkPXLIpOC6EsSEXQMg",
  token: "65PC7u8bY9Ts_iYOYYjf4YgixmHljCqs",
  token_secret: "Sd6VNFAiUMY5sfliBN_2iuRHgew"
});
var router = express.Router();

exports.search = function(req,res) {
	yelp.search({term: "food", location: "Montreal"}, function(error, data) {
	  res.send('index',{data: data, error: error, stuff:"apples"});
	});
}

//module.exports = router;
