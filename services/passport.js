const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});


// passport.use(new GoogleStrategy({
//         clientID: keys.googleClientID,
//         clientSecret: keys.googleClientSecret,
//         callbackURL: '/auth/google/callback', //this is where the user will be redirected after they have given us the consent
//         proxy: true
//     }, (accessToken, refreshToken, profile, done) => {
//         User.findOne({googleId: profile.id}).then((existingUser) => {
//             if (existingUser) {
//                 //we already have a record with the given profile id
//                 done(null, existingUser); //null means there is no error we are fine with the data.
//             } else {
//                 //we dont have a user record with this id, therefor make a new record
//                 new User({googleId: profile.id})
//                     .save()
//                     .then(user => done(null, user));
//             }
//         });
//     }
//     )
// );

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback', //this is where the user will be redirected after they have given us the consent
        proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({googleId: profile.id});
        if (existingUser) {
            return done(null, existingUser); //null means there is no error we are fine with the data.
        }
            const user = await new User({googleId: profile.id}).save();
            done(null, user)
    }
    )
);
