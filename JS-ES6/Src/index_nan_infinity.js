//nan
//
var x;
var y;

var result=x * y;

console.log(result);

var price =10;
var qty;
var tolalprice=qty*price;

console.log(tolalprice);

//type conversion error
//var stockvalue=parseFloat("100.89");
//var stockvalue="$100.89";
var stockvalue=parseFloat("100.0$");
var tolalStock=13;

var total=stockvalue*tolalStock;
console.log(total);


//infinity
console.log(100/0);