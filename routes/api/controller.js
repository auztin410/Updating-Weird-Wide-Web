const db = require("../../models");

module.exports = {
    find: function(req, res) {
        db.Item
        .find({medium: req.params.medium, nsfw: req.params.nsfw, weirdness: req.params.weirdness})
        .sort({exposure: -1})
        .then(dbItem => res.json(dbItem))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Item
        .create(req.body)
        .then(dbItem => res.json(dbItem))
        .catch(err => res.status(422).json(err));
    },
    random: function(req, res) {
        db.Item
        .find({})
        .then(dbItem => res.json(dbItem))
        .catch(err => res.status(422).json(err));
    }

}