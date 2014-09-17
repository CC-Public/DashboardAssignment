Parse.initialize("clCmPyaT4LfjGsGjKuxGcF7Wt1CD6aE6urucljPA", "cnAXZ6Gae05VR2kzZk5sQtN0HRJwM9Y90Mk2LFBt");

var User = Parse.Object.extend("User");

function msg(text) {
  $('#msg').html(text);
}

function GenerateUsers(){
	msg('Creating users...');
	var user = new Parse.Query(User);
	var number = Number($('#userNumber').val());
	var ajaxPromises = [];
	var queryPromises = [];
	for (var i = 0; i < number; i--) {
		ajaxPromises.push($.ajax({
			url: 'http://api.randomuser.me/',
			dataType: 'json',
			success: function(data){
			    queryPromises.push(user.save({
			    	username: data.username,
			    	password: data.password,
			    	firsname: data.name.first,
			    	lastname: data.name.last,
			    	email: data.email,
			    	pictureUrl: data.picture.medium,
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