
var mongoose = require('../../local_libraries/mongoose');
var characterSchema = require('../../local_schemas/characterSchema');

module.exports = mongoose.model('Character', characterSchema);