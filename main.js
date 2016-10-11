//Question 1

var answer1 = document.getElementById("answer1")

function getPrice (items){
	var prices = [];

	for (var count = 0; count < items.length; count++){

	var newPrice =(items[count].price);
	prices.push(newPrice);
	};

	// console.log(prices)
	return prices;
};

function sum(prices){
	var addprices = 0;
	for (var count =0; count< prices.length; count++){
		addprices = (addprices + prices[count])

	}
		return addprices;

}
var allPrices = getPrice(items)
var result = sum(allPrices)
// console.log(result/items.length)
// console.log(getPrice(items))
answer1.innerHTML = result/items.length;

// getPrice(items);


//Question 2

var getItemsPrice = function (items) {
	var itemPrices = [];
	for (var count = 0; count < items.length; count++) {
		var exactPrice = items[count].price;
		// console.log(Exactprice)
		if (exactPrice > 14 && exactPrice < 18) {
			itemPrices.push(items[count].title);
		};

	};
	return itemPrices;
	// console.log(itemPrices);
};

var answer2 = document.getElementById("answer2");
var midPriceItems = getItemsPrice(items);

// var pricesArray = getItemsPrice(items);
// 	madeOfWoodArray.forEach(function(items){
answer2.innerHTML += "<p>" + getItemsPrice (items)+ "</p>";


//Question 3
var answer1 = document.getElementById("answer3")



var gbpcode = function(items){
	var currency = [];
	for(var count = 0; count < items.length; count++){
		var currencytype = items[count].currency_code;
		if(currencytype === "GBP"){
			var newItem = items[count].title + ' costs ' + items[count].price;
			currency.push(newItem);
		};	
		
	};
		return currency;
};
answer3.innerHTML += gbpcode (items);

//Question 4
var wood = items.filter(function(objects) {
	return (objects.materials.includes ("answer4"));
});


var answer4 = document.getElementById("answer4")



var madeofWood = function(items){
	var listofWood = [];
	for(var count = 0; count < items.length; count++){
		var listtype = items[count].materials;
		if(listtype.includes("wood")){
			
			listofWood.push(items[count].title);
		};
	};
	return listofWood;
	console.log(listofWood)
};

// answer4.innerHTML += "<p>" + madeofWood (items) + "</p>";


var madeOfWoodArray = madeofWood(items);
	madeOfWoodArray.forEach(function(title){
	answer4.innerHTML += "<p>" + title + "</p>"
})
 //Question 5

 var eight = items.filter(function(objects){
	return (objects.materials.length > 8)
});

for( count = 0; count < eight.length; count++){
answer5.innerHTML +=  "<p>"+ eight[count].title +"</p>";
};

//Question 6

var madeBySellers = items.filter(function(objects){
 return (objects.who_made === "i_did")
});
var answer6 = document.getElementById ("answer6");
answer6.innerHTML = madeBySellers.length + ' ' + "were made by their sellers";

//




















	










