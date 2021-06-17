const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
var fModule = require('./myFirstModule');

var fs = require('fs');
var url = require('url');

// //Append to index.html
// fs.appendFile('index.html','Appended Content!',function(err){
//     if (err) throw err;
//     console.log('Saved!');
// });

//Create new file using append
fs.appendFile('index2.txt','This txt file is create by append function', function(err){
    if (err) throw err;
    console.log('CREATED!');
});
fs.open('index2.html','w',function(err){
    if (err) throw err;
});

//fs Open
fs.open('index2.txt','w', function(err, file){
    if (err) throw err;
    console.log('OPENED!');
});
//using fs Open to create new file if that file is not existed
fs.open('index3.txt','w', function(err){
    if (err) throw err;
    console.log('CREATED NEW FILE USING OPEN FUNCTION OF FS');
});

//UPDATE FILES
fs.appendFile('index3.txt','This line is updated by appendFile function', function(err){
    if(err) throw err;
})
fs.writeFile('index2.txt','THIS FILE IS OVERWRITED by writeFile function', function(err){
    if (err) throw err;
});


//Delete Method
fs.unlink('index2.html',function(err){
    if (err) throw err;
    console.log('File Deleted!');
});
//Rename Method
fs.rename('index3.txt','indexrename.txt',function(err){
    if (err) throw err;
    console.log('File Renamed!');
});



const server = http.createServer((req, res) => {
    fs.readFile('index.html', function(err,data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        res.write(`Date and Time is: ${fModule.myDateTime()}`);
        res.write(req.url);
        var q = url.parse(req.url, true).query;
        var txt = q.year + " " + q.month;
        res.write(txt);
        return res.end('\nHello World');
    }); 
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});


