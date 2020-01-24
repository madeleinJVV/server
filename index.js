const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback' //this is where the user will be redirected after they have given us the consent
    }, (accessToken, refreshToken, profile, done) => {
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
    }
    )
);

app.get('/auth/google',
    passport.authenticate('google', { //google was not specified - in google strategy it knows to use the google strategy
        scope: ['profile', 'email'] //specifies what access we want from google - google has a list of all the scopes
    })
);

app.get('/auth/google/callback',
    passport.authenticate('google')
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
