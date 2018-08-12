'use strict'

function generate(testLengthArray) {
  var result = [];
  var count = 0;
  var all_case = 0;
  for (var i = 0; i < testLengthArray.length; i++) {
    var input = [];
    var item;
    for (var j = 0; j < testLengthArray[i]; j++) {
      var num = Math.floor(Math.random() * 1000);
      input[j] = num;
    }
    input = input.sort();
    var target;
    var index;
    if (testLengthArray.length >= 4) { 
      if (all_case < 3) {
        switch (all_case) {
          //not found
          case 0:
            target = input[input.length - 1] + 10;
            break;
          //first index
          case 1:
            target = input[0];
            break;
          //last index
          case 2:
            target = input[input.length - 1];
            break;
        }
        index = input.indexOf(target);
        result[count] = { "input": input, "target": target, "output": index };
        all_case++;
      } else {
        target = input[Math.floor(Math.random() * input.length)];
        index = input.indexOf(target);
        result[count] = { "input": input, "target": target, "output": index };
      }
    } else {
      target = input[Math.floor(Math.random() * input.length)];
      index = input.indexOf(target);
      result[count] = { "input": input, "target": target, "output": index };
    }
    count++;
  }

  return result;
}
module.exports = generate
