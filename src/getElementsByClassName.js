// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {


  var elements = [];
  
  var node = node || document.body;

  var contains = function(item) {
    return _.contains(item.classList, className);
  }

  var checkNodes = function(parent) {
    contains(parent) ? elements.push(parent) : null;
    if (parent.hasChildNodes) {
      var children = parent.childNodes;
      _.each(children, function() {
      getElementsByClassName(children);
      });
    }
  }
    checkNodes(node);
	return elements;
}


console.log(document.getElementsByClassName("targetClassName"));
console.log(getElementsByClassName("targetClassName"));