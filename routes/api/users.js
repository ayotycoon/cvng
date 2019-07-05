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

                const _user = new User({
                    _id: new mongoose.Types.ObjectId(),
                    name: req.body.name,
                    phone: req.body.phone,
                    email: req.body.email.toLowerCase().trim(),
                    pwd: hash,
                    dev: false

                })
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