const db = require('../models/db.js');
const User = require('../models/UserModel.js');

const controller = {

    getFavicon: function (req, res) {
        res.status(204);
    },

    getIndex: function(req, res) {
        db.findMany(User, {}, '', function(result) {
            res.render('home', {
                contacts: result
            });
        });
    },

    getCheckNumber: function(req, res) {
        var numInput = req.query.number;
        
        db.findOne(User, {number: numInput}, '', function(result) {
            if (result) res.send(result);
            else res.send('');
        });
    },

    getAdd: function(req, res) {
        var name = req.query.name,
            num = req.query.number;

        db.insertOne(User, {name: name, number: num}, function(result) {
            if (result) {
                res.render('partials/card.hbs', {name: name, number: num}, function (err, html) {
                    res.send(html);
                });
            }
        });
    },

    getDelete: function (req, res) {
        var num = req.query.number;

        db.deleteOne(User, {number: num}, function(result) {
            res.send(result);
        });
    }

}

module.exports = controller;
