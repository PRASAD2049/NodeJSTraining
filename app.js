const http = require('http');

const server = http.createServer(function(req,res){

const url = req.url;
const method = req.method;

if(url === '/'){
    res.write('<html>');
    res.write('<head><title>Node JS training</title></head>');
    res.write('<body>Prasad</body>')
    res.write('</html>');

    return res.end();
}

if(url === '/message'){
    res.statusCode = 302;
    res.setHeader('Location','/');
    return res.end();
}

res.setHeader('Content-Type','text/html');
res.write('<html>');
    res.write('<head><title>Node JS training</title></head>');
    res.write('<body>First Page</body>')
    res.write('</html>');


})


server.listen(3000);