import express, { Express } from 'express';
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
import { Profile } from 'passport-google-oauth20';

const app: Express = express();

const port = 5000
const keys = require('../keys')

passport.use(new GoogleStrategy(

    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    (accessToken: string, refreshToken: string, profile: Profile, done: Function) => {
        console.log(accessToken);
        // You can also use other parameters like refreshToken, profile, etc.
    }


));

app.get('/auth/google', passport.authenticate(
    'google',
    {
        scope: ['profile', 'email']
    }))

app.get('/auth/google/callback', passport.authenticate('google'))

app.listen(port, () => {

    console.log(`Running on ${port}`)
});

