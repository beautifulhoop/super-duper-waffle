const GoogleStrategy = require('passport-google-oauth20').Strategy
import { Profile } from 'passport-google-oauth20';
require('dotenv').config();
const passport = require('passport')

console.log(process.env.googleClientID)

const callbackURL = process.env.NODE_ENV === 'production'
    ? 'https://super-duper-waffle.onrender.com/auth/google/callback'
    : 'http://localhost:5000/auth/google/callback';

// const googleClientSecret = process.env.googleClientSecret;
// const googleClientID = process.env.googleClientID;

// if (!process.env.googleClientID || !process.env.googleClientSecret) {
//     throw new Error("Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET environment variables.");
// }
passport.use(new GoogleStrategy(

    {
        clientID: process.env.googleClientID,
        clientSecret: process.env.googleClientSecret,
        callbackURL: callbackURL
    },
    (accessToken: string, refreshToken: string, profile: Profile, done: Function) => {
        console.log(accessToken);

    }


));