const express = require("express");
const app = express();
const path =require('path')
const cors = require('cors')
const session =require('express-session')
const passport = require('passport');
const dotenv = require('dotenv');
const auth = require('./auth');
const { profile } = require("console");
dotenv.config({path:path.join(__dirname,"/config/config.env")});

const isLoggedIn = (req,res, next) => {
    req.user ? next() : res.sendStatus(401);
}

app.use(cors({
    // origin:"*",
    origin:["http://localhost:5173", "https://accounts.google.com/o/oauth"],
    credentials:true,
    methods:['GET','POST','DELETE','UPDATE','PUT','PATCH'],
}));

app.use(express.json());

app.use(session({
    secret:'afljsdaffldkasjf',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
    
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/api/test',(req, res, next) => {
  console.log("hello");
  res.send("Hi")
})

app.get('/api/google',
  passport.authenticate('google', { scope: ["email", 'profile'] }),(req, res, next)=>{
    console.log(profile);
    res.send(profile)
  });

app.get('/api/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    // console.log("success");
    res.send("login ")
    // res.redirect('/');
});

module.exports=app;