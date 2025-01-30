const jsonwebtoken = require('jsonwebtoken');
const authenticateJWT = (secretKey) => {
    console.log("1111");
    // return (req, res, next) => {
        const token =  "<<token>>";
        if (!token) {
            console.log("unauthorized !!!");
            // return res.status(401).json({ message: "Unauthorized user !! - Authentication required" });
        }
        const actualToken = token.startsWith('Bearer ') ? token.slice(7) : token;
        jsonwebtoken.verify(actualToken, secretKey, (err, data) => {
            if (err) {
                console.log("3333");
                console.log("Invalid token");
                // return res.status(403).json({ message: "Invalid token" });

            }else{
            console.log("Token Verified SUccessfully...."); 
            }
        });
    };

let secretKey = "<<secret key>>"
authenticateJWT (secretKey);