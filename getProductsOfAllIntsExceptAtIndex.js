var getProductsOfAllIntsExceptAtIndex = function(ints) {
  var result = [];
  var product = 1;
  for (var i = 0; i < ints.length; i++) {
    result.push(product);
    product *= ints[i];
  }

  product = 1;
  for (var i = ints.length - 1; i >= 0; i--) {
    result[i] *= product;
    product *= ints[i];
  }

  return result;
};