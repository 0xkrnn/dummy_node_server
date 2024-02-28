const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy
const userModel = require("../models/userModel");


passport.use(new LocalStrategy({}, async (username, password, done) => {

    const user = await userModel.findOne({ username })

    try {

        if (user) done(null, user)
        return done(null, false)

    } catch (error) {
        done(error)
    }

}));