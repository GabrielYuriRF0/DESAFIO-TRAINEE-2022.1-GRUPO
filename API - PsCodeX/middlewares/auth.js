const jwt = require('jsonwebtoken');
const config = require('../configs/config');

const auth = (req, res, next) => {
    const token_header = req.headers.auth;
    if(!token_header) return res.status(401).send({error: 'Autenticação recusada!'});

    jwt.verify(token_header, config.jwt_verf, (err, decoded) => {
        if (err) return res.status(401).send({error: 'Token inválido!'});
        res.locals.auth_data = decoded;
        return next();
    });
}

module.exports = auth;