function pigLatin(str){
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let newWord = str.split(" ");
    let lastWord = newSentenceArray[newSentenceArray.length - 1];
  if (lastWord[lastWord.length - 1] === ".") {
    newSentenceArray[newSentenceArray.length - 1] = lastWord.slice(0, lastWord.length - 2)
    lastWord = ".";
  }