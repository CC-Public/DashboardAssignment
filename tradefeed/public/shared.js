
function GetRandomUserActivity(user) {
	return {
		user: user,
		action: GetRandBoolean()? 2 : 1, // Buy = 1, Sell = 2
		amount: GetRand(1000),
		currency: currencies[GetRand(currencies.length - 1)],
		price: GetRand(100) + GetRand(100) / 100,
		company: companies[GetRand(companies.length - 1)],
		date: new Date(),
	}
}

function GetRand(max) {
	return Math.floor(Math.random()*(max + 1));
}
function GetRandBoolean() {
	return Math.random()>.5;
}

var currencies = ['USD', 'EUR', 'GBP', 'AUD'];
var companies = ["Visalia","Soprano","Bleendot","Enaut","Verbus","Intrawear","Isopop","Cosmetex","Magnina","Virxo","Speedbolt","Irack","Bovis","Remotion","Tingles","Suretech","Combogen","Gadtron","Comcur","Tetratrex","Geostele","Syntac","Vixo","Schoolio","Cofine","Fanfare","Furnitech","Insurety","Cubicide","Dancerity","Mondicil","Synkgen","Verton","Dognosis","Turnling","Xinware","Cablam","Adornica","Applidec","Plutorque","Volax","Aquasseur","Hometown","Ceprene","Typhonica","Tsunamia","Magnemo","Dragbot","Calcu","Comtour"];

// for cloud modules import
exports.GetRandomUserActivity = GetRandomUserActivity;