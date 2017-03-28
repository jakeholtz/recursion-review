// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, node) {
  
  var elements = [];
  var checkNodes = function(node) {
    if (_.contains(node.classList, className)) {
      elements.push(node);
    };
    _.each(node.childNodes, function(child) {
      checkNodes(child);
    });
    
  }
  checkNodes(document.body);
  return elements;
}