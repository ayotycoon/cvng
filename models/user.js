
const mongoose = require('mongoose');
const user = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    smLinkedln: {
        type: String,
        default: ''
    },
    smTwitter: {
        type: String,
        default: ''
    },

    phone: {    //phone
        type: String,
        required: true
    },
    name: {     //name
        type: String,
        required: true
    },
    dev: {
        type: Boolean,
        default: false
    },
    smTwitter: String,
    smLinkedln: String,
    bio: String,
    skills: [{ skill: String, grade: Number }],
    softwares: [{ software: String, grade: Number }],
    experience: [{ workplace: String, points: String, startYear: Number, endYear: String, address: String, role: String }],
    education: [{ school: String, degree: String, points: String, startYear: Number, endYear: String }],

    languages: [
        { title: String, grade: Number }
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
        required: true
    },
    interests: [{ title: String, grade: Number }],


    date: {
        type: Date,
        default: Date.now
    },




});


module.exports = mongoose.model('users', user);
