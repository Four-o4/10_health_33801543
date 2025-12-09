// Create a new router
const express = require("express")
const router = express.Router()

// redirects to log in page
const redirectLogin = (req, res, next) => {
    if(!req.session.userId) {
        res.redirect('/users/login') 
    } else {
        next ();
    }
}

// Handle our routes
router.get('/',function(req, res, next){
    res.render('index.ejs')
});

// Define a route for the about page
router.get('/about',function(req, res, next){
    res.render('about.ejs')
});

router.get('/logout', redirectLogin, (req,res) => {
        req.session.destroy(err => {
        if (err) {
          return res.redirect('./')
        }
        res.send('you are now logged out.' + ' <a href="./">Go to Home Page</a>')
        })
    });


// Export the router object so index.js can access it
module.exports = router