//Niv Ozer, id: 208993329
//Omri Shema, id: 313380479
//requirements
const express = require('express');
const User = require('../models/users'); // Ensure the path is correct
const router = express.Router();
// Extract everything from the request query
router.get('/', async (req, res) => { 
    try {
        //Find all users and create a list(report_users)
        const allUsers = await User.find({});
        const user_report = { users: [] };

        // Iterate over each user and push to the report array
        for (const user of allUsers) {
            user_report.users.push({
                // id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                // birthday: user.birthday
            });
        }
        //IF SUCCESS
        res.status(200).json(user_report);
    } 
    //ELSE(ERROR)
    catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
module.exports = router;
