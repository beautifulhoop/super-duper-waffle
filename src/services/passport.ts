const GoogleStrategy = require('passport-google-oauth20').Strategy
import { Profile } from 'passport-google-oauth20';
const keys = require('../config/keys')
const passport = require('passport')



passport.use(new GoogleStrategy(

    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    (accessToken: string, refreshToken: string, profile: Profile, done: Function) => {
        console.log(accessToken);

    }


));