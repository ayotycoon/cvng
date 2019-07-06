const express = require('express');
const router = express.Router()
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
// models
const User = require('../../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;



router.post('/register', function (req, res, next) {
    console.log(req.body)
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            res.status(201).json({ success: false, msg: 'Email already exists' });
        } else {
            bcrypt.hash(req.body.pwd.trim().toLowerCase(), saltRounds, function (err, hash) {
                if (err) throw err;

                let _user;
                if(!req.body.prefill) {
                     _user = new User({
                         _id: new mongoose.Types.ObjectId(),
                         name: req.body.name,
                         phone: req.body.phone,
                         email: req.body.email.toLowerCase().trim(),
                         pwd: hash,
                         dev: false

                     })
                } else {
                    _user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        name: req.body.name,
                        phone: req.body.phone,
                        email: req.body.email.toLowerCase().trim(),
                        pwd: hash,
                        dev: false,
                        smLinkedln: 'salesrep03',
                        smTwitter: 'salesrep',
                        role: 'Customer service assistant',
                        address: '26 Off Badore Road, Badore, Ajah, Lagos',
                        smLinkedln: 'k17mail',
                        bio: `Highly communicative individual with strong interpersonal skills and an ability to adapt to working in team environments. Motivated by challenge, an astute and dedicated student working to the highest of ability and effectively managing the challenges of part-time employment while successfully completing VCE. Ongoing volunteer engagement demonstrates a focus on community, while work in customer service field demonstrates reliability, honesty, integrity and ability to collaborate. `,
                        // skills

                        skills: [
                            { skill: 'Business process improvement', grade: 100 },
                            { skill: 'Problem solving', grade: 80 }
                        ],
                        softwares: [
                            { software: 'MicroSoft word', grade: 100 },
                            { software: 'MicroSoft Excel', grade: 80 }
                        ],
                        experience: [
                            {
                                workplace: 'Cnvg Plc', address: '27, frictional way, ikeja, Lagos.',
                                // tslint:disable-next-line:max-line-length
                                points: '<ul><li>Working on a casual basis, this position involved meeting general customer service demands and assisting with processing customer lay-bys and stock requests</li><li>Worked with Cvng to resolve Customer problems, improve operations and provide exceptional customer service.</li></ul>', role: 'Sales assistant', startYear: 2001, endYear: 3000
                            },
                            {
                                workplace: 'Cvng plc', address: '27, frictional way, ikeja, Lagos.',
                                points: '<ul><li>Learnt the basics of customer service</li></ul>', role: 'Intern', startYear: 2501, endYear: 'present'
                            }
                        ],
                        education: [
                            {
                                school: 'Frictional university', degree: ' Bsc Customer relations',
                                points: '<ul><li>Member of student union</li></ul>', startYear: 2014, endYear: 2019
                            },
                            {
                                school: 'Frictional college', degree: 'Waec',
                                points: '', startYear: 2008, endYear: 2014
                            }
                        ],

                        languages: [
                            { title: 'English', grade: 80 }
                        ],
                        interests: [
                            { title: 'Football', grade: 80 }
                        ]


                });
            }
                _user.save()
                    .then(e => res.status(201).json({ success: true, msg: 'Sucessfully created user' }))
                    .catch(e => res.status(201).json({ success: false, msg: '---An error has occured' }))
            });
        }
    })
        .catch(e => res.status(201).json({ success: false, msg: 'An error has occured' }))


});
router.post('/login', function (req, res, next) {

    const email = req.body.email.trim().toLowerCase();
    const pwd = req.body.pwd.trim().toLowerCase();
    console.log(req.body)
    User.findOne({ email })
        .then(user => {
            if (user) {
                const hashedPwd = user.pwd;
                bcrypt.compare(pwd, hashedPwd, function (err, bcryptRes) {
                    if (err) throw err;

                    if (bcryptRes) {
                        const token = jwt.sign(
                            {
                                name: user.name,
                                _id: user._id,
                                img: user.img,
                                email: user.email
                            },
                            process.env.SECRET,
                            {
                                expiresIn: process.env.TOKENEXPIRY
                            }
                        )
                        res.status(201).json({ success: true, token: token })
                    }


                });
            } else {
                res.status(201).json({ success: false, msg: 'Incorrect email or password' })
            }

        })
        .catch(err => res.status(201).json({ success: false, msg: 'Incorrect email or password' }))
});


module.exports = router;