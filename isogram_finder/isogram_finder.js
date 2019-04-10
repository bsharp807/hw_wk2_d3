class IsogramFinder{
 constructor(word) {
   this.word = word.toLowerCase().split('');
 }

  isIsogram() {
    let words = this.word;
    let alpha = [];
    for(let i of words){
      let count = 0;
      for(let x of words){
        if(x === i){
          count += 1;
        };
        if(count > 1){
          alpha.push(x);
        }
      }
    }
    if(alpha.length === 0){
      return true;
    } return false;
  }
}

module.exports = IsogramFinder;
