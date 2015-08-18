'use strict';

let emailGenerator = require('./email_generator');
let emailList      = emailGenerator.createEmailList(100000);

function removeDuplicates (array) {
  let clean = [];
  let dups = {};
  let start = process.hrtime();

  for (let i = 0, len = array.length; i < len; i++) {
    if (!dups[array[i]]) {
      dups[array[i]] = array[i];
      clean.push(array[i]);
    }
  }

  let end = process.hrtime(start);
  console.log('Execution time: ' + end[0] + 's ' + end[1]/1000000 + 'ms');
  return clean;
}

let cleanedList = removeDuplicates(emailList);
