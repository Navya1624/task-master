import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    console.log(JSON.stringify(req.headers.cookies));
    const token = req.headers.cookies?.token || req.headers['authorization'];
    if (!token) return res.status(403).json({message: 'A token is required for authentication'});

    try {
        console.log("tryyy");
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.user = decoded;
    } catch (err) {
        return res.status(401).send('Invalid Token');
    }
    return next();
};
