angular.module('userProfiles').service('mainService', function(){



this.quotes = [
    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  ];

this.alternateQuotes = [
    { text: 'Life is pain.', author: 'Krevin Keuse'},
    { text: 'Whatever the mind of man can conceive pain.', author: 'Hapoleon Nill'},
    { text: 'Strive to be in pain.', author: 'Albert Feinstein'},
    { text: 'Two roads diverged in pain.', author: 'Fobert Rost'},
    { text: 'The most painful thing is pain.', author: 'Famelia Earfart'},
    { text: 'Life is pain and then you die.', author: 'Lohn Jennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  ];

var service = this;

  this.trash_click = function(quote){
    for(var x = 0;x< this.quotes.length;x++){
      if(quote === this.quotes[x]){
        this.quotes.splice(x,1);
      }
    }
  }
  var index = 0;
  this.add_button_click = function(){

    index++;


    return this.quotes.push(this.alternateQuotes[index]);

}












});
