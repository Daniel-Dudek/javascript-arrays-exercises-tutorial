let arrayOfCelsiusValues = [-2, 34, 56, -10];

let arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value) {
	
	// Add your code here and return the new value
	// if(value == 12) return value + "pm";
    // else if(value == 24) return value-12 + "am";
    // else if(value > 11) return value-12 + "pm";
    // else return value + "am";
	return (value * 9/5) + 32
});

console.log(arrayOfFahrenheitValues);
