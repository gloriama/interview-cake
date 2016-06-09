// O(nlogn)
var highestProduct = function(arrayOfInts) {
  arrayOfInts.sort();
  var l = arrayOfInts.length;
  return Math.max(
    arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[l - 1],
    arrayOfInts[l - 3] * arrayOfInts[l - 2] * arrayOfInts[l - 1]
  );
};

// O(n)
var highestProduct = function(arrayOfInts) {
  var smallest = []; // store smallest two
  var largest = []; // store largest two

  for (var i = 0; i < arrayOfInts.length; i++) {
    var int = arrayOfInts[i];
    var valueToRemove;
    var indexToRemove;
    if (smallest.length < 2) {
      smallest.push(int);
    } else {
      valueToRemove = Math.max.apply(null, smallest.concat(int));
      indexToRemove = smallest.indexOf(valueToRemove);
      if (indexToRemove !== -1) {
        smallest[indexToRemove] = int;
      }
    }

    if (largest.length < 3) {
      largest.push(int);
    } else {
      valueToRemove = Math.min.apply(null, largest.concat(int));
      indexToRemove = largest.indexOf(valueToRemove);
      if (indexToRemove !== -1) {
        largest[indexToRemove] = int;
      }
    }
  }

  return Math.max(
    smallest[0] * smallest[1] * largest[2],
    largest[0] * largest[1] * largest[2]
  );
};