var avg = items.reduce(function(a,b){
	return a + b.price
},0) / items.length

document.querySelector("#answer1").innerHTML = `The average price is $${avg.toFixed(2)}`

var cost = items.filter(function(a) {
	if ( a.price >= 14 && a.price <= 18){
		return true
	} else { 
		return false
	}
}).map(function(a){
 	return a.title
 })

document.querySelector("#answer2").innerHTML = cost

let string = ""

var currency = items.filter(function(a){
	if (a.currency_code === "GBP"){
		return true
	} else {
		return false
	}
}).map(function(a){
	return {
		title: a.title,
		price: a.price
	}
}).forEach(function(a){
	string += `${a.title} costs &pound;${a.price}`
})

document.querySelector("#answer3").innerHTML = string

var wood = items.filter(function(a) {
	if (a.materials.indexOf("wood") !==-1) {
		return true
	} else { 
		return false
	}
}).map(function(a){
 	return a.title
 })

document.querySelector("#answer4").innerHTML = wood

let list = ""
var currency = items.filter(function(a){
	if (a.materials.length >= 8){
		return true
	} else {
		return false
	}
}).forEach(function(a){
	list += `${a.title} has ${a.materials.length} materials ${a.materials}`
})

document.querySelector("#answer5").innerHTML = list

var made = items.filter(function(a){
	if (a.who_made === "i_did") {
		return true
	} else {
		return false
	}
})

document.querySelector("#answer6").innerHTML = `${made.length} were made by their sellers.`
