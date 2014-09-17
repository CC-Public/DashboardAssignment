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
  			var p = userActivity.save({
  				user: users[i],
  				action: GetRand(10) > 5? 2 : 1, // Buy = 1, Sell = 2
  				amount: GetRand(1000),
  				currency: currencies[GetRand(currencies.length - 1)],
  				price: GetRand(100) + GetRand(100) / 100,
  				company: companies[GetRand(companies.length - 1)],
  				date: new Date(),
  			}).then(function() {
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

function GetRand(max) {
	return Math.floor(Math.random()*(max + 1));
}

var currencies = ['USD', 'EUR', 'GBP', 'AUD'];
var companies = ["Visalia","Soprano","Bleendot","Enaut","Verbus","Intrawear","Isopop","Cosmetex","Magnina","Virxo","Speedbolt","Irack","Bovis","Remotion","Tingles","Suretech","Combogen","Gadtron","Comcur","Tetratrex","Geostele","Syntac","Vixo","Schoolio","Cofine","Fanfare","Furnitech","Insurety","Cubicide","Dancerity","Mondicil","Synkgen","Verton","Dognosis","Turnling","Xinware","Cablam","Adornica","Applidec","Plutorque","Volax","Aquasseur","Hometown","Ceprene","Typhonica","Tsunamia","Magnemo","Dragbot","Calcu","Comtour"];