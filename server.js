const express = require('express') 
const limitter = require('express-rate-limit')
const app = express()
const port = 3001


// using it as a middleware protects the entire route in this file(or your project)
app.use (limitter({
    windowsMs : 5000,
    max :5,
    message: {
        code: 429,
        message: " Too many request"
    }
}))



app.get('/rate' , (req,res)=> {
    res.jsonp({"message" : "rate limter is hot!! "})
})

app.get('/login' , (req,res)=> {
    res.jsonp({"message" : "rate api"})
})
 
app.get('/rate/v1' , (req,res)=> {
    res.jsonp({"message" : "rate route v1 "})
})


------------------------------------------ OR --------------------------------
// Protecting the register route making it available for only 2 maximum request
const registerLimitter = limitter({
    windowMs : 5000,
    max : 2
}) 
app.post('/register',registerLimitter , (req,res)=> {
    res.jsonp({"message" : "register page "})
})

// protecting the login route making it available for only 2 request 
const loginLimitter = limitter({
    windowMs : 5000,
    max : 2
})
app.post('/login',loginLimitter , (req,res)=> {
    res.jsonp({"message" : "Login has started "})
})



app.listen(port , console.log("server is runing !!!"))
