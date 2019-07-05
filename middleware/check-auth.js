const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.SECRET);
        if (decoded) {
            next();
        }

    } catch (error) {
        res.status(403).json({
            success: false
        })
        console.log('auth failed-----')
    }

};
