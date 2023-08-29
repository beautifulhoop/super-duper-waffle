"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = (0, express_1.default)();
const port = 5000;
const keys = require('../keys');
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log(accessToken);
    // You can also use other parameters like refreshToken, profile, etc.
}));
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));
app.get('/auth/google/callback', passport.authenticate('google'));
app.listen(port, () => {
    console.log(`Running on ${port}`);
});
//# sourceMappingURL=index.js.map