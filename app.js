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
