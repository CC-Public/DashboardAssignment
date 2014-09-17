var helper = require('cloud/shared.js');

Parse.Cloud.define("GetNewUserActivityUpdates", function(request, response) {

    var result = [];
    var User = Parse.Object.extend("User");

    var queryUser = new Parse.Query(User);
    queryUser.find().then(function(users) {
        for (var i = 0; i < users.length; i++) {
            // generate updates randomly not for all users. The chance of getting
            // updte for user will be 1% in this case
            if(Math.random()<.01){
                result.push(helper.GetRandomUserActivity(users[i]));
            }
        }
        response.success(result);
    });
});
