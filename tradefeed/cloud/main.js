
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("GetUpdates", function(request, response) {
	var Users = [
    {name: 'Charlette', Id: 1,
    {name: 'Hunter',
    {name: 'Mahalia',
    {name: 'Pamila',
    {name: 'Diana',
    {name: 'Lauran',
    {name: 'Wilford',
    {name: 'Dionna',
    {name: 'Alissa',
    {name: 'Leonarda',
    {name: 'Alleen',
    {name: 'Damon',
    {name: 'Renaldo',
    {name: 'Ricky',
    {name: 'Bud',
    {name: 'Martin',
    {name: 'Tyisha',
    {name: 'Magdalena',
    {name: 'Rogelio',
    {name: 'Candra',
]
	var result = [];
	for(var i =0; i < 10; i++) {
		result.push({
			user: {
				Id: Math.floor(Math.random()*11),
				Name: Math.floor(Math.random()*11)
			} 
			userId: Math.floor(Math.random()*11),
		})
	}
  	response.success(result);
});
