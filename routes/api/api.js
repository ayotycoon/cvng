const express = require('express');
const router = express.Router()
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const path = require('path');
// models
const User = require('../../models/user');
const Template = require('../../models/template');

const usersRouter = require('./users');
const checkAuth = require('../../middleware/check-auth');
const getUser = require('../../middleware/getUser');

const multer = require('multer');
const upload = multer({ dest: 'upload/' });
var fs = require('fs');



var pdf = require('html-pdf');
const base = path.resolve('./assets').replace(/\\/g, '/');
// 'file:///C:/Users/USER/Documents/aaa-PROJECTS/cvng/apiServer/assets/'
const options = {
    base: `file:///${base}/`,
    format: "A4"
}




router.use('/users', usersRouter)

router.get('/getMyProfile', checkAuth, (req, res) => {
    const tokenUser = getUser(req)._id;
    User.findById(tokenUser)
        .select('-pwd')
        .then(data => {
            if (data) {
                res.status(201).json({ success: true, data: data })
            } else {
                res.status(201).json({ success: false })
            }
        })
        .catch(e => res.status(201).json({ success: false }))

})
router.get('/getNameFromId/:id', (req, res) => {
    const id = req.params.id;
    User.findById(id)
        .select('name email _id')
        .then(data => {
            if (data) {
                res.status(201).json({ success: true, data: data })
            } else {
                res.status(201).json({ success: false })
            }
        })
        .catch(e => res.status(201).json({ success: false }))

})

router.post('/setMyProfileData', checkAuth, (req, res) => {
    const tokenUser = getUser(req)._id;
    User.findByIdAndUpdate(tokenUser)
        .select('-pwd')
        .then(data => {
            if (data) {
                data.img = req.body.img;
                data.role = req.body.role;
                data.address = req.body.address;
                data.name = req.body.name;
                data.phone = req.body.phone;
                data.bio = req.body.bio;
                data.skills = req.body.skills;
                data.softwares = req.body.softwares;
                data.experience = req.body.experience;
                data.education = req.body.education;
                data.languages = req.body.languages;
                data.save().then(r => {
                    console.log(r)
                    if (r) {
                        res.status(201).json({ success: true })
                    } else {
                        res.status(201).json({ success: false })
                    }
                }).catch(err => res.status(201).json({ success: false }))
            } else {
                res.status(201).json({ success: false })
            }
        })
        .catch(e => res.status(201).json({ success: false }))

})
router.post('/settemplate', checkAuth, (req, res) => {
    const tokenUser = getUser(req)._id;
    User.findByIdAndUpdate(tokenUser)
        .select('-pwd')
        .then(data => {
            if (data) {
                const bodyData = req.body;
                bodyData.date = new Date()
                data.resume = bodyData;

                data.save().then(r => {
                    if (r) {
                        res.status(201).json({ success: true })
                    } else {
                        res.status(201).json({ success: false })
                    }
                }).catch(err => res.status(201).json({ success: false }))
            } else {
                res.status(201).json({ success: false })
            }
        })
        .catch(e => res.status(201).json({ success: false }))

})
router.get('/getTemplates', (req, res) => {
    let limit;
    let query;
    let cat;
    let type;
    let owner;
    if (req.query) {
        if (req.query.limit) {
            limit = parseInt(req.query.limit)
        } else {
            limit = 30
        }
        if (req.query.query.trim() !== '') {
            query = new RegExp(req.query.query.toLowerCase())
        } else {
            query = null;
        }
        if (req.query.type == 'classic' || req.query.type == 'all' || req.query.type == 'colored') {
            type = req.query.type
        } else {

            type = 'all'
        }
        if (req.query.owner && req.query.owner !== 'undefined') {
            owner = req.query.owner;
        }
        cat = req.query.cat

    }
    const queryObject = {}
    if (type !== 'all') {
        queryObject['options.wholetype'] = type
    }
    if (query !== null) {
        queryObject['options.wholetitle'] = query
    }
    if (cat) {
        queryObject['options.wholecat'] = cat
    }
    if (owner) {
        queryObject['owner'] = owner
    }
    console.log(queryObject)

    Template.find(queryObject)
        .limit(limit)
        .then(data => {
            if (data) {
                res.status(201).json({ success: true, data: data })
            } else {
                res.status(201).json({ success: false })
            }
        })
        .catch(e => res.status(201).json({ success: false }))

})
router.get('/getTemplates/:templateId', (req, res) => {

    const templateId = req.params.templateId;
    Template.findById(templateId)
        .then(data => {
            if (data) {
                res.status(201).json({ success: true, data: data })
            } else {
                res.status(201).json({ success: false })
            }
        })
        .catch(e => res.status(201).json({ success: false }))

})
router.get('/deleteTemplate/:templateId', checkAuth, (req, res) => {
    const tokenUser = getUser(req)._id;
    const templateId = req.params.templateId;

    Template.findById(templateId)
        .then(data => {
            if (data) {
                if (data.owner == tokenUser) {
                    fs.unlinkSync('upload/' + data.path)
                    Template.findByIdAndDelete(templateId)
                        .then(r => res.status(201).json({ success: true }))
                        .catch(e => res.status(201).json({ success: false }))
                } else {
                    res.status(201).json({ success: false })
                }

            } else {
                res.status(201).json({ success: false })
            }
        })
        .catch(e => res.status(201).json({ success: false }))

})
router.get('/getimages/:path', (req, res) => {

    const path = req.params.path;

    fs.readFile('upload/' + path, function read(err, data) {
        if (err) {
            res.status(404).json('not found');
        } else {
            res.send(data);
        }

    });


})

router.post('/savetemplate', upload.single('image'), checkAuth, (req, res) => {
    const tokenUser = getUser(req)._id;
    const options = JSON.parse(req.body.options);
    if (req.body.id == 'false' || req.body.id == false) {

        const _id = new mongoose.Types.ObjectId();
        const templatePath = 'template_' + tokenUser + '_' + _id + '.png';
        fs.rename('upload/' + req.file.filename, 'upload/' + templatePath, function (err) {
            if (err) console.log('ERROR: ' + err);


            const template = new Template({
                _id,
                template: req.body.template,
                path: templatePath,
                owner: tokenUser,
                options
            })
            template.save()
                .then(data => res.status(201).json({ success: true, data: _id }))
                .catch(err => res.status(201).json({ success: false }))

        });

    } else {
        Template.findByIdAndUpdate(req.body.id)
            .then(data => {
                if (data) {
                    fs.unlinkSync('upload/' + data.path)

                    fs.rename('upload/' + req.file.filename, 'upload/' + data.path, function (err) {
                        if (err) console.log('ERROR: ' + err);
                        console.log('here')
                        data.template = req.body.template;
                        data.options = options;
                        data.save()
                            .then(datadata => res.status(201).json({ success: true, data: data._id }))
                    })


                }

            })

    }



})
router.post('/setMyProfilePhoto', upload.single('profile'), checkAuth, (req, res) => {
    const tokenUser = getUser(req)._id;


    User.findByIdAndUpdate(tokenUser)
        .then(data => {
            if (data) {
                fs.unlink('upload/' + data.img, (err) => {
                    if (err) {
                        console.log(err);
                    }
                    const tmp = req.file.originalname.split('.');
                    const fileExt = tmp[tmp.length - 1]
                    fs.rename('upload/' + req.file.filename, 'upload/' + data._id + '.' + fileExt, function (err) {
                        if (err) console.log('ERROR: ' + err);
                        data.img = data._id + '.' + fileExt;
                        data.save()
                            .then(datadata => res.status(201).json({ success: true, data: data.img }))
                    })


                })




            }

        })





})

router.post('/generate', checkAuth, (req, res) => {
    const tokenUser = getUser(req)._id;
    const html = req.body.html;
    const pdfPath = `upload/${tokenUser}.pdf`;
    fs.readFile(pdfPath, function read(err, data) {
        // check of its there first
        if(err) {
            pdf.create(html, options).toFile(pdfPath, function (err, res_) {
                fs.readFile(pdfPath, function read(err, data) {
                    if (err) {
                        res.status(404).json('not found');
                    } else {
                        res.status(201).json({ success: true })
                        setTimeout(() => {
                            fs.unlinkSync(pdfPath)
                        }, 6000);
                    }

                });

            })
        } else {
            res.status(201).json({ success: false})
        }
    });


  




})

router.get('/beadev', checkAuth, (req, res) => {
    const tokenUser = getUser(req)._id;

    User.findByIdAndUpdate(tokenUser)
        .then(data => {
            data.dev = true;
            data.save()
                .then(r => {
                    res.status(201).json({ success: true })
                })
                .catch(e => {
                    res.status(201).json({ success: false })
                })
        })
        .catch(e => {
            res.status(201).json({ success: false })
        })

})
router.get('/clearanddeluser/:user', checkAuth, (req, res) => {
    const tokenUser = getUser(req)._id;
    if (tokenUser == '5d0a69e351d2144ca0224638') {

    }
    User.findByIdAndDelete(req.params.user)
        .then(e => e)
        .catch(e => e)


})

router.get('/getpdf/:path', (req, res) => {

    const path = req.params.path;

    fs.readFile('upload/' + path, function read(err, data) {
        if (err) {
            res.status(404).json('not found');
        } else {
            res.send(data);
        }

    });


})




module.exports = router;