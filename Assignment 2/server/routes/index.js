let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage)

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage)

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact page. */
router.get('/contact', indexController.displayContactPage);

/* Get Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* Post Route for processing the Login page */
router.post('/login',indexController.processLoginPage );

/* Get Route for displaying the Register page - Create operation */
router.get('/register', indexController.displayRegisterPage);

/* Post Route for processing the Register page - Create operation */
router.post('/register',indexController.processRegisterPage);

/* Get to perform User Logout */
router.get('/logout', indexController.performLogout);

module.exports = router;
