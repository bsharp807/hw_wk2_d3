class PangramFinder{
  constructor(phrase) {
    this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
    this.phrase = phrase.toLowerCase();
  }

  isPangram() {
    const match = this.alphabet;
    let lower = this.phrase.split('');
    let alpha = match.filter(function(bet){
      return lower.includes(bet);
    });
    if(alpha.length < 26){
      return false;
    } return true;
  };
}

module.exports = PangramFinder;
