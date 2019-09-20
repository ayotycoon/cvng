
const mongoose = require('mongoose');
const user = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    email: {
        type: String,
        trim: true,
        default: '',
        required: true
    },
    role: {
        type: String,
        trim: true,
        default: '',
        default: ''
    },
    address: {
        type: String,
        trim: true,
        default: '',
        default: ''
    },
    smLinkedln: {
        type: String,
        trim: true,
        default: '',
        default: ''
    },
    smTwitter: {
        type: String,
        trim: true,
        default: '',
        default: ''
    },

    phone: {    //phone
        type: String,
        trim: true,
        default: '',
        required: true
    },
    name: {
        type: String,
        trim: true,
        default: '',
        required: true
    },
    dev: {
        type: Boolean,
        default: false
    },
    smTwitter: {
        type: String,
        trim: true,
        default: '',
        default: ''
    },
    smLinkedln: {
        type: String,
        trim: true,
        default: '',
        default: ''
    },
    bio: {
        type: String,
        trim: true,
        default: '',
        default: ''
    },
    skills: [{
        skill: {
            type: String,
            trim: true,
            default: '',

        }, grade: Number
    }],
    softwares: [{
        software: {
            type: String,
            trim: true,
            default: '',

        }, grade: Number
    }],
    experience: [{
        workplace: {
            type: String,
            trim: true,
            default: '',

        }, points: {
            type: String,
            trim: true,
            default: '',

        }, startYear: Number, endYear: {
            type: String,
            trim: true,
            default: '',

        }, address: {
            type: String,
            trim: true,
            default: '',

        }, role: String
    }],
    education: [{
        school: {
            type: String,
            trim: true,
            default: '',

        }, degree: {
            type: String,
            trim: true,
            default: '',

        }, points: {
            type: String,
            trim: true,
            default: '',

        }, startYear: Number, endYear: String
    }],

    languages: [
        {
            title: {
                type: String,
                trim: true,
                default: '',

            }, grade: Number
        }
    ],
    img: {
        type: String,
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
        default: '',
        required: true
    },
    interests: [{
        title: {
            type: String,
            trim: true,
            default: ''
        }, grade: Number
    }],
    dob: {
        type: String,
        trim: true,
        default: ''
    },


    date: {
        type: Date,
        default: Date.now
    },




});


module.exports = mongoose.model('users', user);
