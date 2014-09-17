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

Parse.Cloud.define("GetUserActivities", function(request, response) {
    var UserActivity = Parse.Object.extend("UserActivity");
    var queryUserActivity = new Parse.Query(UserActivity).include('user');
    queryUserActivity.limit(request.params.limit).find().then(function(userActivities) {
    	var result = [];
    	for(var i=0; i < userActivities.length;i++) {
    		result.push({
    			user: userActivities[i].get('user'),
    			action: userActivities[i].get('action'),
				amount: userActivities[i].get('amount'),
				currency: userActivities[i].get('currency'),
				price: userActivities[i].get('price'),
				company: userActivities[i].get('company'),
				date: userActivities[i].get('date'),
    		});
    	}
        response.success(result);
    });
});
