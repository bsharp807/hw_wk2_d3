class AnagramFinder{

  constructor (word) {
    this.word = word.toLowerCase().split('');
    // this splits the word provided into an array of all the characters individualised lower case.
    this.wordSpaghetti = word;
    // this is a key value pair for just the input word to make later functions easier.
  }

  findAnagrams(otherWords) {
    let words = this.word
    // a variable to make later instances easier to read
    let wordSpag = this.wordSpaghetti;
    // another variable to minimise length below
    let anagrams = [];
    // setting an empty array to use later
    for(let otherWord of otherWords){
      // this loop creates the array that needs to be returned to pass the tests. It either returns the words that fit the anagram or an empty array.
      let i = otherWord.toLowerCase().split('');
      // the i variable takes each element, makes it lower case then turns it into an array that the rest of the loop can use to compare with the word parameter.
      if(i.length === words.length && otherWord != wordSpag){
        // here the if statement filters out any elements that are too long and any elements that are identical to the word parameter
        let x = i.filter(function(y){
          return words.includes(y);
        })
        // x is an array that is created by filtering out any letters (which are elements of the array created at this point) and passing in only letters that match the original word.
        if(x.length === i.length){
          anagrams.push(otherWord);
          // if the number of letters in the filtered array matches the original array split from the passed element, then it pushes the element itself into the anagram array. Otherwise, nothing gets added to anagrams and it moves onto the next element in the otherWord array to loop through the filters.
        }
      }
    }
    return anagrams;
  }
}

module.exports = AnagramFinder;
