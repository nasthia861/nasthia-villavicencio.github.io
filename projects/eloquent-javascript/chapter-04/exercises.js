////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = 1) {
  let array = [];
  if(start < end){
    if(step > 0){
     for(let i = start; i <= end; i += step){
        array.push(i);
      }
    }
  } else if(start > end){
      if(step < 0){
        for(let x = start; x >= end; x+= step){
          array.push(x);
        }
      }
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  let total = 0;
  	for(let i = 0; i < array.length; i++){
    	total += array[i];
    }
  	return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array){
	let newArray = [];
  	for(let i = array.length - 1; i >= 0; i--){
    	newArray.push(array[i]);
    }
  	return newArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array){
  let rest = null;
  for(let i = array.length - 1; i >= 0; i--){
    rest = {value: array[i], rest: rest};
  }
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, output=[]){
  //base
  if(list === null){
    return output;
  }
  //recursion
  output.push(list.value);
  return listToArray(list.rest, output)
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend() {

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
