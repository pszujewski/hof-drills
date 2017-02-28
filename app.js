function repeat(fn, n) {
	for(let i = 0 ; i< n ; i++ ){
		fn();
	}
}

function hello(){
	console.log('Hello World');
}

function goodbye(){
	console.log('Goodbye World');

}
repeat(hello, 5);
repeat(goodbye, 5);

// Functions as return values

function createGreeter(str) {
	return function (name) {
		return str+" "+name;
	}
}

var greeterEng = createGreeter("Hello");
var greeterFr = createGreeter("Bonjour");

var eng = greeterEng("Anna");
var fr = greeterFr("Sofia");

console.log(eng);
console.log(fr);

//forEach, filter and map
function tMovement(array){
	let filtered = array.filter(function(arr){
		if(arr[0]>=0 && arr[1]>=0){
			return arr;
		}

	});
	let mapped = filtered.map(function(arr){
		return arr[0] + arr[1];
	});
	mapped.forEach(function(steps){
		console.log(`The turtle walked ${steps}`);
	});

}

tMovement([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]);
