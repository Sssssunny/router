const express = require('express');
const app = express();
const serveStatic = require('serve-static');
const expressSession = require('express-session');
var bodyParser = require('body-parser')
const port = 3001;

const router = express.Router();

// 미들웨어
app.use(serveStatic('views'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function(req, res){
    console.log('--------------로그인 페이지 접속--------------');
    res.redirect('/login.html');
});

app.post('/process/Login', urlencodedParser, function (req, res) {
    console.log('>>>>> id <<<<<');
    console.log(req.body.id);
    console.log('>>>>> password <<<<<');
    console.log(req.body.PassWord);
    res.send("id : " + req.body.id + "<br>" + "pw : " +  req.body.PassWord)
  })

// app.post('/process/Login', function(req, res){
    // console.log('--------------플레이오토 접속--------------');;
    // res.redirect('http://www.playauto.co.kr');
// });

app.get('/process/Join', function(req, res){
    console.log('--------------회원가입 페이지 접속--------------');
    res.redirect('/join.html');
});

app.listen(port, function(){
    console.log('...loading...');
  });