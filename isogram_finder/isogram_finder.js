class IsogramFinder{
 constructor(word) {
   this.word = word.toLowerCase().split('');
   // setting the lower case array here to simplify things below
 }

  isIsogram() {
    let words = this.word;
    // a variable so as to make it easier to get the code below to work
    let alpha = [];
    // setting an empty array that the dual loops below will fill if certain requirements are met.
    for(let i of words){
      // this is the first of two loops here, taking the first element of the word array above before performing a loop on all the other elements of the array below
      let count = 0;
      // this is necessary to count how many times an element meets itself. In order for the string to be an isogram, it will meet itself exactly once, otherwise it's not an isogram
      for(let x of words){
        // this is the second loop, where we compare the i element with all the other elements in the array
        if(x === i){
          count += 1;
        };
        // if i meets itself, add one to the count.
        if(count > 1){
          alpha.push(x);
          // if i met itself more than once, then the count will be greater than one. Thus, any duplicate letters are added to the alpha array. The second loop then starts again for the next element in the array. Once this cycle has finished, the next element in the array in the first loop is assigned to i and we start loop two again.
        }
      }
    }
    if(alpha.length === 0){
      return true;
    } return false;
    // the only way alpha has zero elements in it is if each letter only appears once in the string; an isogram.
  }
}

module.exports = IsogramFinder;
