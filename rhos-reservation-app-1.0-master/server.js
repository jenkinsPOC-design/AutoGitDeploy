const PORT = process.env.PORT || 8080 ;
const CONTEXT_PATH='onlinebank' ;

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const router = express.Router();
const request = require('request');

// URL 

const OPEN_ACCNT_API = process.env.APP_FORM_DETAILS_API || "http://174.37.17.168:32675";
const CUST_DETAILS_API = process.env.CUST_DETAILS_API || "http://174.37.17.168:32700";
const LOYALTY_POINTS_API = process.env.LOYALTY_POINTS_API || "http://174.37.17.168:31438";
const ACCNT_DETAILS_API = process.env.ACCNT_DETAILS_API || "http://174.37.17.168:30941";
const MONEY_TRN_API = process.env.PAYMENT_API || "http://174.37.17.168:30504";
const CREDIT_TRN_API = process.env.CREDIT_CARD_TRN_API || "http://174.37.17.168:31411";
const LOAN_RATE_API = process.env.LOAN_FIXED_RATE_API || "http://174.37.17.168:31853/dailyratesapi/rates";
const MAP_API = process.env.BRANCH_LOCATION_MAP_API || "http://174.37.17.168:32635/api/bmap/searchmarkers";


const OB_APP_CLIENT_ID = process.env.OB_APP_CLIENT_ID || 'f207ea52698ef3bf684b4e0c17280e1e';
const OB_APP_CLIENT_SECRET = process.env.OB_APP_CLIENT_SECRET || '35206775e115408da423ab422e52cfd8';

const MAP_APP_CLIENT_SECRET = process.env.MAP_APP_CLIENT_ID || 'f207ea52698ef3bf684b4e0c17280e1e';
const MAP_APP_CLIENT_ID = process.env.MAP_APP_CLIENT_SECRET || '35206775e115408da423ab422e52cfd8';


// Usings Parsers
var urlencoded_body_parser = bodyParser.urlencoded({
  extended: true
});
app.use(bodyParser.json());
app.use(urlencoded_body_parser);
router.use(bodyParser.urlencoded({ extended: true }));


//Using router
app.use('/', router);


/* ---- working */
app.get('/',(req,res) => {
	console.log(" base / " + req.url);
	res.sendFile(path.join(__dirname,CONTEXT_PATH+"/index.html"));
});


app.get('/assets/*',(req,res) => {
	console.log(" assets / any " + req.url);
	res.sendFile(path.join(__dirname,CONTEXT_PATH+req.url));
});


app.get('/onlinebank/*.*',(req,res) => {
	console.log(" any " + req.url);
	res.sendFile(path.join(__dirname,req.url));
});

app.get('/onlinebank/*',(req,res) => {
	console.log(" any " + req.url);
	res.sendFile(path.join(__dirname,CONTEXT_PATH +"/index.html"));
});


//------------------------------custdetails-----------------------------------------------------
app.post("/custdetails/*",function(req,res){
  console.log('POST custdetails ' + req.url );
  console.log('host url :    ' + CUST_DETAILS_API);  
  var newURL = req.url;
  newURL=newURL.replace(/\/custdetails/g, '');
  newURL=CUST_DETAILS_API+newURL;
  console.log("URL -->" , newURL );
  
  console.log(req.body);
  console.log("");
  
  var myJSONObject = req.body;
   
	request({
		  url: newURL,
		  method: 'POST',		  
		  json: true,   // <--Very important!!!
		  body: myJSONObject
		  }, function (error, response, body){
					if(error)
				  throw error;
				else{
				  console.log(response.body);
				  res.json(response.body);   
				}
	});

	
});


app.get("/custdetails/*",function(req,res){
   
  console.log('GET custdetails ' + req.url );
  console.log('host url :   ' + CUST_DETAILS_API);  
  var newURL = req.url;
  newURL=newURL.replace(/\/custdetails/g, '');
  newURL=CUST_DETAILS_API+newURL;
  console.log("URL -->" , newURL );
  
  console.log('query params' , req.queryString);
  console.log('headers',req.headers)
  
  request({
		  url: newURL,
		  method: 'GET',		  
		  json: true,   // <--Very important!!!
		  }, function (error, response, body){
					if(error)
				  throw error;
				else{
				  console.log('response is' ,response.body);				  
				  res.json(response.body);   
				}
	});
  
	
});


app.put("/custdetails/*",function(req,res){
  console.log('PUT custdetails ' + req.url );
  console.log('host url :   ' + CUST_DETAILS_API);  
  var newURL = req.url;
	newURL=newURL.replace(/\/custdetails/g, '');
	newURL=CUST_DETAILS_API+newURL;
  console.log("URL -->" , newURL );
  
  
  console.log(req.body);
  console.log("");
  

  
  var myJSONObject = req.body;
   
	request({
		  url: newURL,
		  method: 'PUT',		  
		  json: true,   // <--Very important!!!
		  body: myJSONObject
		  }, function (error, response, body){
					if(error)
				  throw error;
				else{
				  console.log(response.body);
				  res.json(response.body);   
				}
	});

	
});

//-----------------------------------------------------------------------------------



//------------------------------loyaltypoints LOYALTY_POINTS_API --------------------------
app.post("/loyaltypoints/*",function(req,res){
  console.log('POST loyaltypoints ' + req.url );
  console.log('host url :    ' + LOYALTY_POINTS_API);  
  var newURL = req.url;
  newURL=newURL.replace(/\/loyaltypoints/g, '');
  newURL=LOYALTY_POINTS_API+newURL;
  console.log("URL -->" , newURL );
  
  console.log(req.body);
  console.log("");
  
  var myJSONObject = req.body;
   
	request({
		  url: newURL,
		  method: 'POST',		  
		  json: true,   // <--Very important!!!
		  body: myJSONObject
		  }, function (error, response, body){
					if(error)
				  throw error;
				else{
				  console.log(response.body);
				  res.json(response.body);   
				}
	});

	
});


app.get("/loyaltypoints/*",function(req,res){
   
  console.log('GET loyaltypoints ' + req.url );
  console.log('host url :   ' + LOYALTY_POINTS_API);  
  var newURL = req.url;
  newURL=newURL.replace(/\/loyaltypoints/g, '');
  newURL=LOYALTY_POINTS_API+newURL;
  console.log("URL -->" , newURL );
  
  console.log('query params' , req.queryString);
  console.log('headers',req.headers)
  
  request({
		  url: newURL,
		  method: 'GET',		  
		  json: true,   // <--Very important!!!
		  }, function (error, response, body){
					if(error)
				  throw error;
				else{
				  console.log('response is' ,response.body);				  
				  res.json(response.body);   
				}
	});
  
	
});

//-----------------------------------------------------------------------------------



//------------------------------openaccount-----------OPEN_ACCNT_API ------------------------------------------
app.post("/openaccount/*",function(req,res){
  console.log('POST openaccount ' + req.url );
  console.log('host url :    ' + OPEN_ACCNT_API);  
  var newURL = req.url;
  newURL=newURL.replace(/\/openaccount/g, '');
  newURL=OPEN_ACCNT_API+newURL;
  console.log("URL -->" , newURL );
  
  console.log(req.body);
  console.log("");
  
  var myJSONObject = req.body;
   
	request({
		  url: newURL,
		  method: 'POST',		  
		  json: true,   // <--Very important!!!
		  body: myJSONObject
		  }, function (error, response, body){
					if(error)
				  throw error;
				else{
				  console.log(response.body);
				  res.json(response.body);   
				}
	});

	
});


app.get("/openaccount/*",function(req,res){
   
  console.log('GET openaccount ' + req.url );
  console.log('host url :   ' + OPEN_ACCNT_API);  
  var newURL = req.url;
  newURL=newURL.replace(/\/openaccount/g, '');
  newURL=OPEN_ACCNT_API+newURL;
  console.log("URL -->" , newURL );
  
  console.log('query params' , req.queryString);
  console.log('headers',req.headers)
  
  request({
		  url: newURL,
		  method: 'GET',		  
		  json: true,   // <--Very important!!!
		  }, function (error, response, body){
					if(error)
				  throw error;
				else{
				  console.log('response is' ,response.body);				  
				  res.json(response.body);   
				}
	});
  
	
});

//-----------------------------------------------------------------------------------



//------------------------------accdetails------ ACCNT_DETAILS_API-----------------------------------------------
app.post("/accdetails/*",function(req,res){
  console.log('POST accdetails ' + req.url );
  console.log('host url :    ' + ACCNT_DETAILS_API);  
  var newURL = req.url;
  newURL=newURL.replace(/\/accdetails/g, '');
  newURL=ACCNT_DETAILS_API+newURL;
  console.log("URL -->" , newURL );
  
  console.log(req.body);
  console.log("");
  
  var myJSONObject = req.body;
   
	request({
		  url: newURL,
		  method: 'POST',		  
		  json: true,   // <--Very important!!!
		  body: myJSONObject
		  }, function (error, response, body){
					if(error)
				  throw error;
				else{
				  console.log(response.body);
				  res.json(response.body);   
				}
	});

	
});


app.get("/accdetails/*",function(req,res){
   
  console.log('GET accdetails ' + req.url );
  console.log('host url :   ' + ACCNT_DETAILS_API);  
  var newURL = req.url;
  newURL=newURL.replace(/\/accdetails/g, '');
  newURL=ACCNT_DETAILS_API+newURL;
  console.log("URL -->" , newURL );
  
  console.log('query params' , req.queryString);
  console.log('headers',req.headers)
  
  request({
		  url: newURL,
		  method: 'GET',		  
		  json: true,   // <--Very important!!!
		  }, function (error, response, body){
					if(error)
				  throw error;
				else{
				  console.log('response is' ,response.body);				  
				  res.json(response.body);   
				}
	});
  
	
});

//-----------------------------------------------------------------------------------


//------------------------------moneytransfer--------MONEY_TRN_API---------------------------------------------
app.post("/moneytransfer/*",function(req,res){
  console.log('POST moneytransfer ' + req.url );
  console.log('host url :    ' + MONEY_TRN_API);  
  var newURL = req.url;
  newURL=newURL.replace(/\/moneytransfer/g, '');
  newURL=MONEY_TRN_API+newURL;
  console.log("URL -->" , newURL );
  
  console.log(req.body);
  console.log("");
  
  var myJSONObject = req.body;
   
	request({
		  url: newURL,
		  method: 'POST',		  
		  json: true,   // <--Very important!!!
		  body: myJSONObject
		  }, function (error, response, body){
					if(error)
				  throw error;
				else{
				  console.log(response.body);
				  res.json(response.body);   
				}
	});

	
});


app.get("/moneytransfer/*",function(req,res){
   
  console.log('GET moneytransfer ' + req.url );
  console.log('host url :   ' + MONEY_TRN_API);  
  var newURL = req.url;
  newURL=newURL.replace(/\/moneytransfer/g, '');
  newURL=MONEY_TRN_API+newURL;
  console.log("URL -->" , newURL );
  
  console.log('query params' , req.queryString);
  console.log('headers',req.headers)
  
  request({
		  url: newURL,
		  method: 'GET',		  
		  json: true,   // <--Very important!!!
		  }, function (error, response, body){
					if(error)
				  throw error;
				else{
				  console.log('response is' ,response.body);				  
				  res.json(response.body);   
				}
	});
  
	
});

//-----------------------------------------------------------------------------------

//------------------------------ccdetails--------CARD_TRN_API---------------------------------------------
app.post("/ccdetails/*",function(req,res){
  console.log('POST ccdetails ' + req.url );
  console.log('host url :    ' + CREDIT_TRN_API);  
  var newURL = req.url;
  newURL=newURL.replace(/\/ccdetails/g, '');
  newURL=CREDIT_TRN_API+newURL;
  console.log("URL -->" , newURL );
  
  console.log(req.body);
  console.log("");
  
  var myJSONObject = req.body;
   
	request({
		  url: newURL,
		  method: 'POST',		  
		  json: true,   // <--Very important!!!
		  body: myJSONObject
		  }, function (error, response, body){
					if(error)
				  throw error;
				else{
				  console.log(response.body);
				  res.json(response.body);   
				}
	});

	
});


//------------------------------loanrate--------LOAN_RATE_API---------------------------------------------
app.get("/loanrates/*",function(req,res){
   
  console.log('GET loanrate ' + req.url );
  console.log('host url :   ' + LOAN_RATE_API);  
  var newURL = req.url;
  newURL=newURL.replace(/\/loanrates/g, '');
  newURL=LOAN_RATE_API+newURL;
  console.log("URL -->" , newURL );
  
  console.log('query params' , req.queryString);
  console.log('headers',req.headers)
  
  request({
		  url: newURL,
		  method: 'GET',		  
		  json: true,   // <--Very important!!!
		  headers: {
           'Content-Type': 'application/json',
		   'X-IBM-Client-Secret': OB_APP_CLIENT_SECRET,
		   'X-IBM-Client-Id': OB_APP_CLIENT_ID,
          }
		  }, function (error, response, body){
					if(error)
				  throw error;
				else{
				  console.log('response is' ,response.body);				  
				  res.json(response.body);   
				}
	});
	
	
});
//------------------------------------------------------------------------------------------------------------------

//------------------------------findmarkers--------MAP_API---------------------------------------------
app.get("/findmarkers*",function(req,res){
   
  console.log('GET findmarkers ' + req.url );
  console.log('host url :   ' + MAP_API);  
  var newURL = req.url;
  newURL=newURL.replace(/\/findmarkers/g, '');
  newURL=MAP_API+newURL;
  console.log("URL -->" , newURL );
  
  console.log('query params' , req.queryString);
  console.log('headers',req.headers)
  
  request({
		  url: newURL,
		  method: 'GET',		  
		  json: true,   // <--Very important!!!
		  headers: {
           'Content-Type': 'application/json',
		   'X-IBM-Client-Secret': MAP_APP_CLIENT_SECRET,
		   'X-IBM-Client-Id': MAP_APP_CLIENT_ID,
          }
		  }, function (error, response, body){
					if(error)
				  throw error;
				else{
				  console.log('response is' ,response.body);				  
				  res.json(response.body);   
				}
	});
	
	
});
//------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------




app.listen(PORT, "0.0.0.0", function () {
    // print a message when the server starts listening
    console.log("application running on port: " + PORT);
});
