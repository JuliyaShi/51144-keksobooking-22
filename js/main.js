let min;
let max;
function random(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	if (min<max && min>0){
    return rand;

	} else {
	 
     return "The min should be lower than max";
	}
	

} //solution from https://learn.javascript.ru/number
