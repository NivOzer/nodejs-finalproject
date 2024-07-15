//Niv Ozer, id: 208993329
//Omri Shema, id: 313380479
//requirements
const express = require('express');
const app = express();
const router = express.Router();

// Developers data
const developers = [
    { firstname: 'Niv', lastname: 'Ozer', id: 208993329, email: 'niv.ozer@yahoo.com' },
    { firstname: 'Omri', lastname: 'Shema', id: 313380479, email: 'Omrishema@gmail.com' }
];
//End point
router.get('/about', (req, res) => {
    //IF SUCCESS
    try {
        res.json(developers);
    } 
    //ELSE(ERROR)
    catch (error) {
        console.error('Error retrieving developers:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;