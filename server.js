/**
 * 初始化配置
 * 
 */
var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer();
var path = require('path');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

app.get('/',function(req,res){
	res.render('index',{
		error:'error'
	});
});

app.post('/upload',upload.single('userFile'),function(req,res,next){
	var size={
		size:req.file.size
	};
	res.send(size);
});

var port = process.env.PORT || 8080; 
app.listen(port,function(){
	console.log('App listening on: '+port);
});
