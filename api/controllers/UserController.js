module.exports = {


  'new' : function (req, res) {

    res.view();
  },

  create : function(req, res, next) {
    console.log("Entered into user controller");

    if (!req.param('email') || !req.param('name') || !req.param('regno') || !req.param('phone')  || !req.param('hackerrank')) {
      var fieldsRequiredError = [{
        name: 'usernamePasswordRequired',
        message: 'You must enter email.'
      }];

      console.log('Fiels enter na');

      req.session.flash = {
        err1: fieldsRequiredError,
      };

      res.redirect('/user/new');
      return;
    }


    //
    // if (!(req.param('email').validate) ) {
    //   var emailCorrectError = [{
    //     name: 'usernamePasswordRequired',
    //     message: 'You must enter email.'
    //   }];
    //   console.log('Email not validate');
    //
    //   req.session.flash = {
    //     err2: emailCorrectError
    //   };
    //
    //   res.redirect('/user/new');
    //   return;
    //
    // }





    User.create(req.params.all(), function userCreated(err, user) {
      if (err) {
        console.log("This is the error");
        console.log(err);

        req.session.flash = {
          err: err
        };
        return res.redirect('/user/new');
      }






      req.session.authenticated = true;
      req.session.User = user;


      if (user) {
        var thankyou = [{
          name: 'usernamePasswordRequired',
          message: 'Thankyou.'
        }];

        console.log('Thankyou');
        req.session.flash = {
          err2: thankyou,
        };

        Mailer.sendWelcomeMail(user);

        res.redirect('/user/new');
        return;
      }


// res.json(200, {
//   user:  user
// });

    });
  },

  show: function(req, res, next) {
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);
      if (!user) return next();
      res.view({
        user: user
      });
    });
  },




  index : function(req, res, next){

    User.find(function foundUsers(err, users){
      if(err) return next(err);
      res.view({
        users: users
      });
    });
  },
  // //this function is used for returning all the users in form of array.
  //
  //this function is used for returning all the users in form of array.


};





