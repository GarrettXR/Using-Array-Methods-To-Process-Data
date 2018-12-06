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
	if (a.materials >= 8){
		return true
	} else {
		return false
	}
}).map(function(a){
	return {
		title: a.title,
		numberOfMaterials: a.materials.length
		materials: a.materials
	}
}).forEach(function(a){
	list += ~ `${a.title} ${a.materials.length} ${a.materials}`
})

document.querySelector("#answer3").innerHTML = list
