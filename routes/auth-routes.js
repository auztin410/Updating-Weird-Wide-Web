const router = require('express').Router();
const passport = require("../config/passport-setup");
const db = require("../models");



//auth signup local
router.post('/signup',(req, res) => {
    console.log("SIGNUP:", req.body)
    db.User.create(req.body)
    .then(data => {
        res.json("Yay!");
    })
});


//auth login local
router.post('/local', passport.authenticate('local'),(req, res) => {
    res.json(req.user);
});

//auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

//auth logout
router.get('/logout', (req, res) => {
    //handle with passport
    req.logout();
    res.redirect('/');
});


//callback route for google to redirect
router.get('google/redirect', passport.authenticate('google'), (req, res) => {
    
    // res.send(req.user)

    res.redirect('/profile');
})

module.exports = router;