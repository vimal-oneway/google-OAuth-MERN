const passport = require("passport")
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const path =require('path')

const dotenv = require('dotenv');
dotenv.config({path:path.join(__dirname,"/config/config.env")});

passport.use(new GoogleStrategy({
    clientID: process.env.Client_ID,
    clientSecret: process.env.Client_secret,
    callbackURL: "http://localhost:5173"
  },
  function(accessToken, refreshToken, profile, cb) {
    cb(null, profile)
  }
));


passport.serializeUser((user, done) => {
    done(null , user);
})


passport.deserializeUser((user, done) => {
    done(null , user);
})