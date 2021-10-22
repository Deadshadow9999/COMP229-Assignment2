let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({

    contactName:
    {
        type: String,
        default: '',
        trim: true,
        required: 'Contact name is required'
    },

    contactNumber:
    {
        type: Number,
        default: '',
        trim: true,
        required: 'Contact number is required'
    },

    email:
    {
        type: String,
        default: '',
        trim: true,
        required: 'email address is required'
    }
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);