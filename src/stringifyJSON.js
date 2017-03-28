// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === "boolean" || typeof obj === "number"){
  	return obj.toString();
  } else if (typeof obj ==="string"){
  	return '"' +obj+ '"';
  } else if (Array.isArray(obj)){
  	var array = [];
  	_.each(obj, function (element){
  		array.push(stringifyJSON(element));
  	});
  	// return "[" + array.split(",") + "]";
  	return JSON.stringify(array)
  }
  if(obj === null){
    return "null";
  }
};
