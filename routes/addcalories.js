//Niv Ozer, id: 208993329
//Omri Shema, id: 313380479
//requirements 
const express = require('express');
const calories = require('../models/calories');
const router = express.Router();

router.post('/addcalories', async (req, res) => {
    // Extract data from request body
    const { user_id, year, month, day,description ,category ,amount} = req.body;

    // Create new calorie consumption instance
    const newCalorie = new calories({ user_id, year, month,day ,description ,category ,amount});

    const availableCategories = ['breakfast','lunch','dinner','other'];
    if (!availableCategories.includes(category)) {
        return res.status(400).json({error: 'Invalid category'});
    }

    // Save new calorie instance to db
    await newCalorie.save()
        //IF SUCCESS
        .then(() => {
            res.status(201).json({ message: 'Calorie instance added successfully' });
        })
        //ELSE(ERROR)
        .catch((error) => {
            console.error('Error adding calorie instance:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
});


module.exports = router;