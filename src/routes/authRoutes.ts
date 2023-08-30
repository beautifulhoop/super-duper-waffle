const passport = require('passport')
import express, { Express } from 'express';

module.exports = (app: Express) => {
    app.get('/auth/google', passport.authenticate(
        'google',
        {
            scope: ['profile', 'email']
        }))

    app.get('/auth/google/callback', passport.authenticate('google'))
}




