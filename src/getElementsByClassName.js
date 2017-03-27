// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
	var elements = [];
	// //check if a node is passed in as an argument
	// node = document.body || node;
	// // store string of classnames into a variable
	// var parts = node.classname.split(' '); //can we split html collection into a string
	// //check if there's a match of classname in parts
	// if(parts.indexof(className) >= 0) {
	// 	nodes.push(node);
	// }
	// for(var i = 0; i<node.children.length; i++) {
	// 	getElementsByClassName(node, className);
	// }
	// starting at document.body
	var node = document.body || node;
	for (var i = 0; i<node.length; i++){

      _.contains(node.classList, className) ? elements.push(node) : null;
      getElementsByClassName(className, child)
	

}
   
      
// 	if document.body.childNodes[0] !== undefined
// 	   go through each element and if classname is className push it to nodes
	return elements;
};


console.log(document.getElementsByClassName("targetClassName"));
console.log(getElementsByClassName("targetClassName"));