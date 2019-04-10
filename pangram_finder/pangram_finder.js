class PangramFinder{
  constructor(phrase) {
    this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
    this.phrase = phrase.toLowerCase();
    // I get the parsing to lower case out the way early here to eliminate any case issues going forward
  }

  isPangram() {
    const match = this.alphabet;
    let lower = this.phrase.split('');
    // setting some variables to ensure no mistakes happen later on. The second variable turns our initial string into an array which then allows the below function to work
    let alpha = match.filter(function(bet){
      return lower.includes(bet);
    });
    // for each letter of the alphabet, if it exists in the string provided we add it to a new array called alpha.
    if(alpha.length < 26){
      return false;
    } return true;
    // a sentence is a pangram only if it contains 26 unique letters, so any array with less than that isn't a pangram. The are never any duplicates in this function as we're working from the alphabet array in the class, which means each letter can only appear once.
  };
}

module.exports = PangramFinder;
