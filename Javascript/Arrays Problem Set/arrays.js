function printReverse(item){
	for(var i = item.length - 1; i >= 0; i--){
		console.log(item[i]);
	}
}

printReverse([1,2,3]);

function isUniform(arr) {
var first = arr[0];
for(var i = 1; i < arr.length; i++){
	if(arr[i] !== first) {
		return false;
		}
	}
return true;
}

function sumArray(arr) { 
	var totalArray = 0;
	arr.forEach(function(element){
		totalArray += element;
	});
	return totalArray;
}


function max(arr){
var largest = Math.max.apply(Math, arr);
return largest;
}