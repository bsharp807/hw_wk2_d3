class AnagramFinder{

  constructor (word) {
    this.word = word.toLowerCase().split('');
    this.wordSpaghetti = word;
  }

  findAnagrams(otherWords) {
    let words = this.word
    let wordSpag = this.wordSpaghetti;
    let anagrams = [];
    for(let otherWord of otherWords){
      let i = otherWord.toLowerCase().split('');
      if(i.length === words.length && otherWord != wordSpag){
        let x = i.filter(function(y){
          return words.includes(y);
        })
        if(x.length === i.length){
          anagrams.push(otherWord);
        }
      }
    }
    return anagrams;
  }
}

module.exports = AnagramFinder;
