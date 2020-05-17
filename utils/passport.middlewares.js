const passport = require('passport'); //Getting the reference of Passport js
const FacebookStrategy = require('passport-facebook').Strategy; //Getting the reference of Facebook Strategy

//Exporting the functions so that they can be used outside the file
module.exports = {

    //To Initialize the passport service working
    init: (strategyObject) => {
        passport.use(new FacebookStrategy(strategyObject, function (accessToken, refreshToken, profile, done) {
            //console.log(profile);
            done(null, profile);
        }));
    },
    //To Serialize the service
    serialize: () => {
        passport.serializeUser(function (user, done) {
            done(null, user);
        });
    },
    //To deSerialize the service
    deserialize: () => {
        passport.deserializeUser(function (obj, done) {
            done(null, obj);
        });
    }

};