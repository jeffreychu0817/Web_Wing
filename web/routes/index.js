var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
// console.log("cao!");
var sql = require("sqlite3");
sql.verbose();
var db = new sql.Database("user.db");

db.run("CREATE TABLE IF NOT EXISTS database (user, email, password, tag)");
console.log("cao!");
router.post('/', function (req, res, next) {
    const {username, email, password } = req.body;
    console.log('LALALALALA');
    console.log(username, email, password);
    let errors = [];

    if (!username || !email || !password) {
        errors.push({ msg: 'Please enter all fields' });
        res.render('index');
    }

    else if (password.length < 6) {
        errors.push({ msg: 'Password must be at least 6 characters' });
        res.render('index');
    }

    else if (errors.length > 0) {
        res.render('index', {
            errors,
            username,
            email,
            password
        });
    }
    else {
        db.get("SELECT username FROM database WHERE username = ?", [username],function (err, user) {
            console.log("................................");
            if(err){
                errors.push({msg:"There are some errors!"});
            }
            if(user){
                errors.push({msg:"User exists!"});
                console.log("user exist!");
                res.render('index');
            }
            else{
                db.get("INSERT INTO database (username, email, password) VALUES (?,?,?)",[username,email,password],function (err, user) {
                    console.log("##############################");
                    if(err){
                        errors.push({msg:"There are some errors!"});
                    }
                    else{
                        res.redirect('/');
                    }
                });
                res.render('index', {
                    errors
                })
            }
        })
    }
})
module.exports = router;
