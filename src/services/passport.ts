import { Strategy as GoogleStrategy, Profile } from 'passport-google-oauth20';
import User, { IUser } from '../models/User';
// import { Profile } from 'passport-google-oauth20';
declare module 'passport-google-oauth20';


import * as passportGoogleOauth20 from 'passport-google-oauth20';

require('dotenv').config();
import passport from 'passport';
import mongoose from 'mongoose';
// const User = mongoose.model('users');


const callbackURL = process.env.NODE_ENV === 'production'
    ? 'https://super-duper-waffle.onrender.com/auth/google/callback'
    : 'http://localhost:5000/auth/google/callback';

// const googleClientSecret = process.env.googleClientSecret;
// const googleClientID = process.env.googleClientID;

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.serializeUser((user, done) => {
    console.log(user.id);

    done(null, user.id);

});

if (!process.env.googleClientID || !process.env.googleClientSecret) {
    throw new Error("Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET environment variables.");
}
passport.use(new GoogleStrategy(

    {
        clientID: process.env.googleClientID,
        clientSecret: process.env.googleClientSecret,
        callbackURL: callbackURL
    },
    async (accessToken: string, refreshToken: string, profile: any, done: Function) => {
        const existingUser = await User.findOne({ googleID: profile.id })

        if (existingUser) {
            console.log(`user with ${profile.id} already exists!`)
            done(null, existingUser);
        }
        else {
            const user: IUser = await new User({ googleID: profile.id }).save();
            done(null, user);
            console.log(`User with ${profile.id} saved`)
        }

    }


));