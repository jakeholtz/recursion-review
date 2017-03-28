// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === "boolean" || typeof obj === "number"){
  	return obj.toString();
  } else if (typeof obj ==="string"){
  	return '"' +obj+ '"';
  } else if (typeof obj === "function"){
  	throw undefined;
  } else if (Array.isArray(obj)){
  	var array = [];
  	_.each(obj, function (element){
  	  array.push(stringifyJSON(element));
  	});
  	return "[" + array.join(',') + "]"
  } else if (obj === null){
    return "null";
  } else if (typeof obj === 'object') {
    var array = [];
    for (var prop in obj) {
      array.push(stringifyJSON(prop)+ ":" + stringifyJSON(obj[prop]));
    }
    return "{" + array.join(",") + "}";
  } else {
  	obj === 'undefined';
  }
};
