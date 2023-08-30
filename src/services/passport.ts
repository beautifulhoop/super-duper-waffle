import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Profile } from 'passport-google-oauth20';
require('dotenv').config();
import passport from 'passport';
import mongoose from 'mongoose';
const User = mongoose.model('users');


const callbackURL = process.env.NODE_ENV === 'prod'
    ? 'https://super-duper-waffle.onrender.com/auth/google/callback'
    : 'http://localhost:5000/auth/google/callback';

// const googleClientSecret = process.env.googleClientSecret;
// const googleClientID = process.env.googleClientID;

if (!process.env.googleClientID || !process.env.googleClientSecret) {
    throw new Error("Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET environment variables.");
}
passport.use(new GoogleStrategy(

    {
        clientID: process.env.googleClientID,
        clientSecret: process.env.googleClientSecret,
        callbackURL: callbackURL
    },
    async (accessToken: string, refreshToken: string, profile: Profile, done: Function) => {
        const existingUser = await User.findOne({ googleID: profile.id })

        if (existingUser) {
            console.log(`user with ${profile.id} already exists!`)
        }
        else {
            new User({ googleID: profile.id }).save();
            console.log(`User with ${profile.id} saved`)
        }

    }


));