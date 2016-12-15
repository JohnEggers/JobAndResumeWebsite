var express = require('express');
var router = express.Router();
var about_dal = require('../model/about_dal');

// View about page
router.get('/page', function(req, res) {
    about_dal.getAll(function(err, result){
            res.render('about/aboutPage', { 'result':result });
    });
});

// View the ER diagram image
router.get('/erdiagram', function(req, res) {
    about_dal.getAll(function(err, result){
        res.render('about/aboutERDiagram', { 'result':result });
    });
});

// View the relational schema image
router.get('/rschema', function(req, res) {
    about_dal.getAll(function(err, result){
        res.render('about/aboutRSchema', { 'result':result });
    });
});

module.exports = router;

