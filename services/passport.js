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
    },
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId : profile.id });
            if(existingUser) {
                // We have a record with the given id
                return done(null, existingUser);
            } else {
                // We DONT have a record with the given id
               const user = await new User ({googleId: profile.id, name: profile.name.givenName}).save();
                done(null, user);
            }
    })
);
