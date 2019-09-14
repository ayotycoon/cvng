
const mongoose = require('mongoose');
const user = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    email: {
        type: String,
        trim: true,
        required: true
    },
    role: {
        type: String,
        trim: true,
        default: ''
    },
    address: {
        type: String,
        trim: true,
        default: ''
    },
    smLinkedln: {
        type: String,
        trim: true,
        default: ''
    },
    smTwitter: {
        type: String,
        trim: true,
        default: ''
    },

    phone: {    //phone
        type: String,
        trim: true,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    dev: {
        type: Boolean,
        default: false
    },
    smTwitter: {
        type: String,
        trim: true,
        default: ''
    },
    smLinkedln: {
        type: String,
        trim: true,
        default: ''
    },
    bio: {
        type: String,
        trim: true,
        default: ''
    },
    skills: [{
        skill: {
            type: String,
            trim: true,

        }, grade: Number
    }],
    softwares: [{
        software: {
            type: String,
            trim: true,

        }, grade: Number
    }],
    experience: [{
        workplace: {
            type: String,
            trim: true,

        }, points: {
            type: String,
            trim: true,

        }, startYear: Number, endYear: {
            type: String,
            trim: true,

        }, address: {
            type: String,
            trim: true,

        }, role: String
    }],
    education: [{
        school: {
            type: String,
            trim: true,

        }, degree: {
            type: String,
            trim: true,

        }, points: {
            type: String,
            trim: true,

        }, startYear: Number, endYear: String
    }],

    languages: [
        {
            title: {
                type: String,
                trim: true,

            }, grade: Number
        }
    ],
    img: {
        type: String,
        trim: true,
        default: Math.round(Math.random()) === 1 ? './assets/sample1.svg' : './assets/sample2.svg'
    },
    resume: {
        html: String,
        template: mongoose.Schema.Types.ObjectId,
        date: Date,
    },

    pwd: {    //password
        type: String,
        trim: true,
        required: true
    },
    interests: [{
        title: {
            type: String,
            trim: true
        }, grade: Number
    }],
    dob: {
        type: String,
        trim: true
    },


    date: {
        type: Date,
        default: Date.now
    },




});


module.exports = mongoose.model('users', user);
