function pigLatin(str){
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let newWord = str.split(" ");
    let lastWord = newSentenceArray[newSentenceArray.length - 1];
  if (lastWord[lastWord.length - 1] === ".") {
    newSentenceArray[newSentenceArray.length - 1] = lastWord.slice(0, lastWord.length - 2)
    lastWord = ".";
  }
  newWord.forEach(function(word, index){
    if (word === Number){
        newWord[index] = word;
    }else if (
        vowels.includes(word[0])
        ){
            newWord[index] = word + "way";
        }else if(word[0] === 'q'){
            newWord[index] = word.slice(2) + word.slice(0,2) + "ay";
        }else {
            let vowelIndex = 0
      for (i = 0; i < word.length; i++) {  
        if (vowels.includes(word[i])) {
          vowelIndex = i;
          break;
        }
        }
        newSentenceArray[index] = word.slice(vowelIndex) + word.slice(0, vowelIndex) +  "ay";
      }
  })
  return newWord.join(" ") + lastWord;

        }
  
console.log(pigLatin(str));

// UI LOGIC
$(document).ready(function(){
    $("#form").submit(function(event){
      event.preventDefault();
      let text = $("#input").val();
      

    })
});