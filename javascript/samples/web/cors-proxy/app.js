/* creates a CORS-enabled proxy server */

var express = require('express')
, app = express()
, app2 = express()
, http = require('http')
, httpProxy = require('http-proxy')
, proxy = new httpProxy.RoutingProxy()
, url = require('url')
, cliArgs = process.argv.splice(2);

if(!cliArgs || cliArgs.length == 0){
    console.error('You must specify the sample you would like to run. (for example, to run the example Jumpstart: "node app.js Jumpstart")');
    process.exit(1);
}

app.configure(function(){
    app.use(function(req, res, next){
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'appId, X-Requested-With, Accept, Origin, Referer, User-Agent, Content-Type, Authorization, X-Mindflash-SessionID, Geolocation, X-Magnet-Device-Id, X-Magnet-Correlation-id, X-Magnet-Auth-Challenge, X-Magnet-Result-Timeout');
        if('OPTIONS' == req.method){
            res.send(200);
        }else{
            next();
        }
    });
});

var remote = {
    host  : 'maps.googleapis.com',
    port  : 443,
    https : true
};

app.all('*', function(req, res){
    res.oldWriteHead = res.writeHead;
    res.writeHead = function(statusCode, headers){
        res.oldWriteHead(statusCode, headers);
    }
    return proxy.proxyRequest(req, res, {
        changeOrigin : true,
        target       : remote
    });

});

app.set('port', 3009);

http.createServer(app).listen(app.get('port'), function(){
    console.info("CORS-enabled proxy server running on port %d", app.get('port'));
});

app2.configure(function(){
    app2.use(express.static(__dirname + '/../'+cliArgs+'/www'));
});

app2.set('port', 3010);

http.createServer(app2).listen(app2.get('port'), function(){
    console.info("Web application server running on port %d", app2.get('port'));
});