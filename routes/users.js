//Niv Ozer, id: 208993329
//Omri Shema, id: 313380479
//requirements
const express = require('express');
const User = require('../models/users'); // Ensure the path is correct
const router = express.Router();
// Extract everything from the request query
router.get('/:id', async (req, res) => { 
    try {
        const userId = req.params.id;
        const user = await User.findOne({ id: userId }); // Assuming your database uses 'id' field to store user id
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('User not found');
        }
    }
    //ELSE(ERROR)
    catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
module.exports = router;
