const Post = require('../models/post');
const User = require('../models/users');

module.exports.create = function(req,res){
    Post.create({
        content: req.body.content,
        date: req.body.date,
        category:req.body.category,
        user: req.user._id
    }, function(err,post){
        if(err){
            console.log("Error in creating post",err);
            return;
        }
        return res.redirect("back");
    });
}

module.exports.destroy = function(req,res){
    Post.findById(req.params.id,function(err,post){
        post.remove();
        return res. redirect('back');
    })
}