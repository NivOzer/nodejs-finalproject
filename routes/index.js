//Niv Ozer, id: 208993329
//Omri Shema, id: 313380479
//requirements
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //IF SUCCESS
    try {
        res.render('index', { title: 'Calorie Management' });
    }
    //ELSE(ERROR)
    catch (error) {
        console.error('Error rendering home page:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
