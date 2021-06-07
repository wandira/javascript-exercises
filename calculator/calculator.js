const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {

	const accumulation = array.reduce((acc,entry)=>{
    return acc+entry
  },0)

  return accumulation
};

const multiply = function(array) {

  const accumulation = array.reduce((acc,entry)=>{
    return acc*entry
  })
  
  return accumulation
};

const power = function(a,b) {
  if(b==0) return 1
  if(b==1) return a

  let accumulation = a ;
  for(let i=1;i<b;i++){
    accumulation *= a 
  }
	return accumulation
};

const factorial = function(a) {
  if(a==0) return 1
  
  let accumulation = a;
  for(let i= a-1;i>0;i--){
    accumulation = accumulation * i
  }
	return accumulation

};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
