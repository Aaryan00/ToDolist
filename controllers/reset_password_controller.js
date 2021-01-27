const User = require('../models/users');
const AccessToken = require('../models/acessToken');
const crypto = require('crypto');
const forgotpasswordMailer = require('../mailers/forgot_password_mailer');

//get email for password
module.exports.getemail = function(req,res){
    return res.render('user_get_email', {
        title: "Codeial | Reset Password"
    })
}

module.exports.maketoken = async function(req,res){
    try{

        let user = await User.findOne({email: req.body.email});
            if(user){
                let CryptoToken = crypto.randomBytes(30).toString('hex');

                await AccessToken.deleteOne({user: user._id})

                let token = await AccessToken.create({
                    user: user._id,
                    Token: CryptoToken,
                });
                
                    token = await token.populate('user', 'name email').execPopulate();
                    // console.log(token);
                    forgotpasswordMailer.forgotpassword(token);
                    return res.redirect('/');

            }else{
                return res.redirect('back');
            }

    }catch(err){
        if(err){
            console.log('error',err);
            return;
        }
    }
}


module.exports.changepassword = function(req,res){
    // console.log(req);
    AccessToken.find({user: req.cookies.user}, function(err, Token){
        // console.log(Token);
        return res.render('user_update_password', {
            title: "Codeial | Reset Password",
            tokens: Token,
            param: req.params.accesstoken 
        })
    })
}

module.exports.confirmchanging = function(req,res){
    try{
        AccessToken.findOne({Token: req.params.accesstoken}, function(err,token){

            User.findById(token.user,function(err,user){

                user.password = req.body.password;
                user.save();
            })
            AccessToken.deleteOne({Token: req.params.accesstoken})
            return res.redirect('/');  
        })
    }catch(err){
        console.log('error',err);
        return res.redirect('back');
    }
    
}