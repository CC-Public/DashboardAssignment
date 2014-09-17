var helper = require('cloud/shared.js');

Parse.Cloud.define("GetNewUserActivityUpdates", function(request, response) {

    var result = [];
    var User = Parse.Object.extend("User");
    var queryUser = new Parse.Query(User);
    queryUser.find().then(function(users) {
        for (var i = 0; i < users.length; i++) {
            // generate updates randomly not for all users
            if(Math.random()<request.params.chance){
                result.push(helper.GetRandomUserActivity(users[i]));
            }
        }
        response.success(result);
    });
});
