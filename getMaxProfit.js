var getMaxProfit = function(stockPricesYesterday) {
  if (stockPricesYesterday.length < 2) {
    return undefined;
  }

  var bestProfit;
  var min;
  for (var i = 0; i < stockPricesYesterday.length; i++) {
    var price = stockPricesYesterday[i];
    if (i === 1) {
      bestProfit = price - stockPricesYesterday[0];
    } else if (i > 1) {
      bestProfit = Math.max(bestProfit, price - min);
    }

    if (i === 0 || price < min) {
      min = price;
    }
  }
  return bestProfit;
};