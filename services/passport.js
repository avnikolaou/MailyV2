const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/kyes');

// Creating a Class Model for the DB
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
});

passport.use(new googleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId : profile.id })
            .then((existingUser) => {
                if(existingUser) {
                    // We have a record with the given id
                    done(null, existingUser);
                } else {
                    // We DONT have a record with the given id
                    new User ({googleId: profile.id, name: profile.name.givenName})
                        .save()
                        .then(user => done(null, user));
                }
            });
    })
);
