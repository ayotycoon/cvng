const jwt = require('jsonwebtoken');

module.exports=(req)=>{
    if((req.headers.authorization !== undefined) && (req.headers.authorization !== null)) {
        const token= req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.SECRET);
        return decoded;
    }else {
        return false;
    }
};
