// module.exports.sendWelcomeMail = function(obj) {
//     sails.hooks.email.send(
//  "welcomeEmail",
//     {
//         Name: obj.display_name
//     },
//     {
//         to: obj.email,
//             subject: "Welcome Email"
//     },
//     function(err) {
//         if(err) {
//             console.log(err);
//         }
//         else{
//             console.log('Mail sent');
//             console.log(obj.email);
//             console.log(obj.display_name);
//         }
//
//     }
//     )
// };

module.exports.sendWelcomeMail = function(obj) {
sails.hooks.email.send(
    "welcomeEmail",
    {
        Name: obj.name,
    },
    {
        to: obj.email,
        subject: "Hi there"
    },

    function(err) {
        if(err) {
            console.log(err);
        }
        else {
            console.log("It worked!");
            console.log(obj.email);
        }
}
)
};



