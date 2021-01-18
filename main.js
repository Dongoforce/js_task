var a = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
            }
        },
    "stock": {
        "stocks": {
                "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
};

function product_name(data){
  result = data.displayedName.displayedName.value;
  return result;
}

function product_exist(data){
  var regions = data.stock.stocks;
  var result = [];

  for (var i in regions){
      stores = regions[i];
      for (var j in stores){
          if (stores[j] > 0){
              result.push(j);
          }
      }
  }
  return result;
}

function max_products(data){
  var regions = data.stock.stocks;
  var product_max = 0;
  var store_number = 0;
  var result = [];

  for (var i in regions){
      stores = regions[i];
      region = i;
      for (var j in stores){
          if (parseInt(stores[j]) > product_max){
              product_max = stores[j];
              store_number = j;
              result = [[store_number, product_max]];
          }
          else if(parseInt(stores[j]) == product_max){
              result.push([j, stores[j]]);
          }
      }
  }
  return result;
}


var data = product_name(a)
console.log(data);
var data = product_exist(a)
console.log(data);
var data = max_products(a)
console.log(data);