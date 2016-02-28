console.log('Testing mongoose ...');
var mongoose = require('mongoose');
console.log('mongoose: ', mongoose);
mongoose.connect('mongodb://localhost/test');
console.log('mongoose connected: ', mongoose);

var Cat = mongoose.model('Cat', { name: String });
console.log('Cat: ', Cat);

var kitty = new Cat({ name: 'Zildjian' });
console.log('kitty: ', kitty);

kitty.save(function (err) {
  if (err) // ...
  console.log('meow');
});
console.log('End of testing mongoose');