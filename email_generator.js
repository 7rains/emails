'use strict';

const POSSIBLE_CHARACTERS = 'abcdefghijklmnopqrstuvwxyz0123456789';

function randomString (charCount) {
  let string = '';
  let charactersLength = POSSIBLE_CHARACTERS.length;
  for (let i = 0, length; i < charCount; i++ ) {
    string += POSSIBLE_CHARACTERS.charAt(Math.floor(Math.random() * charactersLength));
  }
  return string;
}

function createEmailAddress () {
  return randomString(12) + '@' + randomString(4) + '.com';
}

function createDuplicates (array) {
  let len = array.length;
  let duplicates = len / 2;

  // Randomly assign array.length/2 elements. 
  for (let i = 0; i < duplicates; i++) {
    array[Math.floor(Math.random() * len)] = array[Math.floor(Math.random() * len)];
  }
}

function createEmailList (emailCount) {
  let emailArray = [];
  emailCount = emailCount || 100000

  for (let i = 0; i < emailCount; i++) {
    emailArray.push(createEmailAddress());
  }

  createDuplicates(emailArray);
  return emailArray;
}

module.exports = {
  createEmailList: createEmailList
}
