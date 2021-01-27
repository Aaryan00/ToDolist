const nodemailer = require('../config/nodemailer');

//another way of exporting a method
exports.welcome = (user) => {
    // console.log('enter in mailer', token);
    let htmlString = nodemailer.renderTemplate({user: user},'/welcome/welcome.ejs');
    
    nodemailer.transporter.sendMail({
        from: 'TodoList' ,
        to: user.email,
        subject: "Welcome",
        html: htmlString
    }, (err, info) =>{
        if(err){
            console.log("Error in sending mail",err);
            return;
        }

        // console.log("Mail Deleivered", info);
        return;
    });
}