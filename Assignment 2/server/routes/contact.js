let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// connect to our Book Model
let Contact = require('../models/contact');

let contactController = require('../controllers/contact');

// Helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Contact List page - READ OPeration */
router.get('/', requireAuth, contactController.displayContactList);

/* Get Route for displaying Add page - Create operation */
router.get('/add', requireAuth, contactController.displayAddPage);

/* Post Route for processing Add page - Create operation */
router.post('/add', requireAuth, contactController.processAddPage );

/* Get Route for displaying the update page - Update operation */
router.get('/update/:id', requireAuth, contactController.displayEditPage);

/* Post Route for processing the update page - Update operation */
router.post('/update/:id', requireAuth, contactController.processEditPage);

/* Get to perform Deletion - Delete operation */
router.get('/delete/:id', requireAuth, contactController.performDeletePage);

module.exports = router;