const wordSearch = (letters, word) => {
  if (letters.length <= 0) {
    return undefined;
  }

  const horizontalJoin = letters.map((ls) => ls.join(""));

  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  let newArr = [];
  for (let i = 0; i < letters[0].length; i++) {
    let result = [];
    for (let j = 0; j < letters.length; j++) {
      result.push(letters[j][i]);
    }
    newArr.push(result);
  }

  const verticalJoin = newArr.map((letter) => letter.join(""));

  for (const item of verticalJoin) {
    if (item.includes(word)) {
      return true;
    }
  }
  return false;
};



module.exports = wordSearch;
