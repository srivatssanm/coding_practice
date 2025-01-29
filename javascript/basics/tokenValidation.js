const jsonwebtoken = require('jsonwebtoken');
const authenticateJWT = (secretKey) => {
    console.log("1111");
    // return (req, res, next) => {
        const token =  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYXBwSUQiOiJjcy1iMjYwNGY1My1jNWI2LTU3ZGQtYTdhNS1jNGNmZTQwNDhlZjcifQ._66ZDtnJbN3_CgffnIFiddMZCntcM7tDgiySwT0bzVg";
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

let secretKey = "xRJKbCSp5ZgrR1RTJJc+L3GPidLKQboDcYf4taa2GjA="
authenticateJWT (secretKey);