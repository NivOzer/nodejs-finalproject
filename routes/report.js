//Niv Ozer, id: 208993329
//Omri Shema, id: 313380479
//requirements
const express = require('express');
const calories = require('../models/calories');
const router = express.Router();

router.get('/report', async (req, res) => {
    try {
        // Extract parameters from the request query
        const { user_id, month, year } = req.query;

        // Retrieve by specified user_id, month, and year(required)
        const all_items = await calories.find({ user_id, month, year });
        // Initialize the report object(empty arrays)
        const report = {
            breakfast: [],
            lunch: [],
            dinner: [],
            other: []
        }

        // Categorize each item by category
        all_items.forEach(item => {
            switch (item.category) {
                case 'breakfast':
                    report.breakfast.push(item);
                    break;
                case 'lunch':
                    report.lunch.push(item);
                    break;
                case 'dinner':
                    report.dinner.push(item);
                    break;
                default:
                    report.other.push(item);
                    break;
            }
        });
        //IF SUCCESS
        res.status(200).json(report);
    } 
    //ELSE(ERROR)
    catch (error) {
        console.error('Error retrieving report:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
