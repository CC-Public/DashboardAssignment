Parse.initialize("clCmPyaT4LfjGsGjKuxGcF7Wt1CD6aE6urucljPA", "cnAXZ6Gae05VR2kzZk5sQtN0HRJwM9Y90Mk2LFBt");

var User = Parse.Object.extend("User");
var UserActivity = Parse.Object.extend("UserActivity");

function msg(text) {
  $('#msg').html(text);
}

function GenerateUsers(){
	msg('Creating users...');
	var number = Number($('#userNumber').val());
	var ajaxPromises = [];
	var queryPromises = [];
	for (var i = 0; i < number; i++) {
		ajaxPromises.push($.ajax({
			url: 'http://api.randomuser.me/',
			dataType: 'json',
			success: function(data){
				var u = data.results[0].user;
				var user = new User();
			    queryPromises.push(user.save({
			    	username: u.username,
			    	password: u.password,
			    	firsname: u.name.first,
			    	lastname: u.name.last,
			    	email: u.email,
			    	pictureUrl: u.picture.medium,
			    }));
			}
		}));
	}
	$.when(ajaxPromises).done(function() {
		$.when(queryPromises).done(function () {
			msg(number+ ' users created');
		}) 
	})
}


function GenerateUsersActivity(){
	msg('Creating user activity records...');
	var queryPromises = [];
	var recordsGenerated = 0;
  	var queryUser = new Parse.Query(User);
  	queryUser.find().then(function(users) {
  		for (var i = 0; i < users.length; i++) {
  			var userActivity = new UserActivity();
  			var p = userActivity.save(GetRandomUserActivity(users[i])).then(function() {
  				recordsGenerated++;
  				return Parse.Promise.as();
  			});
  			queryPromises.push(p);
  		}
  	}).then(function() {
		Parse.Promise.when(queryPromises).then(function () {
			msg(recordsGenerated + ' user activity records created');
		});
  	});
}

function CheckGetNewUserActivityUpdates() {
  msg('Calling GetNewUserActivityUpdates...');
  Parse.Cloud.run('GetNewUserActivityUpdates', {since: new Date(), chance:$('#chance').val()}, {
    success: function(result) {
      msg('<pre>' + JSON.stringify(result, null, 4) + '</pre>');
    },
    error: function(result) {
      msg('Error: ' + result.error);
    }
  });
}