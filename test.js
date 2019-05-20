const express = require('express');
const rq = require('request-promise');
const app = express();
const serveStatic = require('serve-static');
const expressSession = require('express-session');
var bodyParser_post = require('body-parser');
const port = 3001;

const router = express.Router();

app.use(serveStatic('views'));

app.get('/', function(req, res){
    console.log('--------------로그인 페이지 접속--------------');
    res.redirect('/login.html');
});

app.post('/process/Login', function(req, res){
    console.log('--------------플레이오토 접속--------------');;
    res.redirect('http://www.playauto.co.kr');
});

app.post('/process/Join', function(req, res){
    console.log('--------------회원가입 페이지 접속--------------');;
    res.redirect('/join.html');
});

app.listen(port, function(){
    console.log('...loading...');
  });