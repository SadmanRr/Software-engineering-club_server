const jwt = require("jsonwebtoken")
exports.generateToken = (userInfo) => {
    console.log(userInfo);
    const payload = {
        email: userInfo.email,
        role: userInfo.role
    }
    console.log(payload);
    const token = jwt.sign(payload, "process.env.SECRET_JWT_KEY", {
        expiresIn: '4d'
    })
    return token;
}