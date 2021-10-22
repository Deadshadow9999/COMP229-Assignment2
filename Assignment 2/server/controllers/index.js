let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
const { response } = require('../config/app');

// Create the User model instance
let usermodel = require('../models/user');
let User = usermodel.User; // Alias

module.exports.displayHomePage = (req, res, next) =>{
    res.render('pages/home', {title: "Home", displayName: req.user ? req.user.displayName: ''});
}

module.exports.displayAboutPage = (req, res, next) =>{
    res.render('pages/about', {title: "About", displayName: req.user ? req.user.displayName: ''});
}

module.exports.displayProjectsPage = (req, res, next) =>{
    res.render('pages/projects', {title: "Projects", displayName: req.user ? req.user.displayName: ''});
}

module.exports.displayServicesPage = (req, res, next) =>{
    res.render('pages/services', {title: "Services", displayName: req.user ? req.user.displayName: ''});
}

module.exports.displayBusinessContactsPage = (req, res, next) =>{
    res.render('contact/list', {title: "businessContacts", displayName: req.user ? req.user.displayName: ''});
}

module.exports.displayContactPage = (req, res, next) =>{
    res.render('pages/contact', {title: "Contact", displayName: req.user ? req.user.displayName: ''});
}

module.exports.displayLoginPage = (req, res, next)=>{
    // Check if the user is already logged in
    if(!req.user)
    {
        res.render('auth/login',{
            title: "Login",
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName: ""
        })
    }
    else{
        return res.redirect('/');
    }
};

module.exports.processLoginPage = (req, res, next) =>{
    passport.authenticate('local',
    (err, user, info) =>{
        // Server error
        if(err)
        {
            return next(err);
        }
        // Is there a user login error
        if(!user)
        {
            req.flash('loginMessage', 'Authenication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) =>{
            // Server error
            if(err)
            {
                return next(err);
            }
            return res.redirect('/business-contacts-list');
        });
    })(req, res, next);
};

module.exports.displayRegisterPage = (req, res, next) =>{
    // Check if user is not already logged in
    if(!req.user)
    {
        res.render('auth/register',
        {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName: ""
        });
    }
    else{
        return res.redirect('/');
    }
};

module.exports.processRegisterPage = (req, res, next) =>{
    // Instantiate a user object
    let newUser = new User({
        username: req.body.username,
        //password: req.body.password,
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (err) =>{
        if(err)
        {
            console.log("Error: Inserting New User");
            if(err.name == "UserExistsError")
            {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log('Error: User Already Exists!')
            }
            return res.render('auth/register',
            {
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
        }
        else{
            // If no error exists, then registration is successful

            // Redirect the user and r
            return passport.authenticate('local')(req, res, () =>{
                res.redirect('/business-contacts-list');
            });
        }
    });
};

module.exports.performLogout = (req, res, next) =>{
    req.logout();
    res.redirect('/');
};