
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("GetUpdates", function(request, response) {
	var names = [
    'Charlette',
    'Hunter',
    'Mahalia',
    'Pamila',
    'Diana',
    'Lauran',
    'Wilford',
    'Dionna',
    'Alissa',
    'Leonarda',
    'Alleen',
    'Damon',
    'Renaldo',
    'Ricky',
    'Bud',
    'Martin',
    'Tyisha',
    'Magdalena',
    'Rogelio',
    'Candra',
]
	var result = [];
	for(var i =0; i < 10; i++) {
		result.push({
			user: {
				Id: Math.floor(Math.random()*11),
				Name: 
			} 
			userId: Math.floor(Math.random()*11),
		})
	}
  	response.success(result);
});
