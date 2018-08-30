const passport = require('passport');
const keys = require('./keys');
// const User = require('../userModel');
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require('passport-google-oauth20');
const db = require("../models");

passport.use(
    new GoogleStrategy({
    // options for the strategy
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecred: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    // check if user already exists in our database
    
    db.User.findOne({googleId: profile.id}).then((dbUser) => {
        if (dbUser){
             // already have user in db
            console.log("user is: " + dbUser);
            done(null, dbUser);
        } else {
            // if not, create new user in db
            new User ({
                username: profile.displayName,
                googleId: profile.id
            }).save().then((newUser) => {
                console.log("new User Created: " + newUser);
                done(null, newUser);
            });
        }
    });

})
);


passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    function(email, password, done) {
      db.User.findOne({
          email: email
      }).then(function(dbUser) {
        console.log(dbUser);
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect email."
          });
        } else if (!dbUser.validatePassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }

        // var filteredUser = {
        //   email: dbUser.email
        // }

        return done(null, dbUser);
      })
      .catch(err => done(err, false));
    }
  )
);

passport.serializeUser((user, done)=> {
    done(null, user._id); 
})

passport.deserializeUser((id, done)=> {
    db.User.findById(id)
    .then((user) => {
      if(!user) {
        return done(null, false);
      }
        done(null, user._id); 
    })
    .catch(err => {
      console.log(err);
      done(err, false)
    });
});

module.exports = passport;

