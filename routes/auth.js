// const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const User = require("../models/userModel");
// const router = require("./userRoute.js")
// // const express = require('express');
// // const router = express.Router();

// // passport.use(
// //   new GoogleStrategy(
// //     {
// //       clientID: "267063161260-3usv5iggqn3p5oemjciq4uemcnkq50cj.apps.googleusercontent.com",
// //       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// //       callbackURL: "/auth/google/callback",
// //     },
// //     async function (accessToken, refreshToken, profile, done) {
// //       try {
// //         // Check if user already exists
// //         let user = await User.findOne({ email: profile.emails[0].value });

// //         if (!user) {
// //           // Create new user if doesn't exist
// //           user = await User.create({
// //             email: profile.emails[0].value,
// //             name: profile.displayName,
// //             // Add any other required fields from your userModel
// //             password: 'google-auth-' + Math.random().toString(36).slice(-8), // Generate a random password if required
// //             googleId: profile.id
// //           });
// //         }

// //         return done(null, user);
// //       } catch (error) {
// //         return done(error, null);
// //       }
// //     }
// //   )
// // );

// // router.get('/auth/google',
// //   passport.authenticate('google', { scope: ['profile'] }));

// // router.get('/auth/google/callback', 
// //   passport.authenticate('google', { failureRedirect: '/login' }),
// //   function(req, res) {
// //     // Successful authentication, redirect home.
// //     res.redirect('/');
// //   });
  
// passport.serializeUser((user, done) => {
//   done(null, user.id);  // Store user ID in session
// });
// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await User.findById(id);
//     done(null, user);
//   } catch (error) {
//     done(error, null);
//   }
// });

// module.exports = passport;