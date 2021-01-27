module.exports.home = function(req,res){
    
    // //if user is logged in then he is not allowed in home page
   
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('home',{
        title: "Todo_List"
    });
}
