const User = require('../models/users');
const Post = require('../models/post'); 
const welcomeMail = require("../mailers/welcome");

module.exports.profile = function(req,res){
//     if(req.cookies.user){
//         User.findById(req.cookies.user,function(err,user){
//             if(user){
//                 return res.render('profile',{
//                     title: "Profile | User",
//                     user: user,
//                     // post: post
//                 });
//             }
//         });
//     }else{
//         return res. redirect('/');
//     }

        Post.find({},function(err,posts){
            return res.render('profile',{
                title: 'Profile | User',
                posts: posts,
            })
        });
}

module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm){
        return res.redirect('back');
    }
    User.findOne({email : req.body.email},function(err,user){
        if(err){
            console.log("Error in finding user in signing up");
            return
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log("Error in creating user while signing up");
                    return 
                }
                welcomeMail.welcome(user);
                return res. redirect('back');
            })
        }else{
            return res.redirect('back');
        }
    });
}

module.exports.createSession = function(req,res){
    User.findOne({email : req.body.email},function(err,user){
        if(err){
            console.log("Error in finding user in signing in");
            return;
        }
        if(user){
            if(user.password != req.body.password){
                console.log("Error in creating user while signing up");
                    return 
            }

            res.cookie('user',user.id);
            return res. redirect('/users/profile');

        }else{
            return res. redirect('/');
        }
    });
}

module.exports.destroySession = function(req,res){
    req.logout();

    return res. redirect('/');
}