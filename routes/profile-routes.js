const router = require('express').Router();

const authCheck = (req, res) => {
    if (!req.user){
    //if user is not logged in
        res.json(null);
    } else {
        // if logged in
        res.json(req.user);
    }
}

router.get('/user', authCheck);

module.exports = router;