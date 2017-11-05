function isEven(num){

	if (num % 2 === 0) {
		return true;
	}

	else {
		return false;
	}
}

function factorial(num){

var result = 1;
for (var i = num; i > 0; i--) {
	result = result * i;
}

return result;

}

function kebabToSnake(str){
	
	var newStr = str.replace(/-/g , "_");

	return newStr;

}