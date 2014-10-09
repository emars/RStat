var mongoose = require('mongoose');

module.exports = mongoose.model('RStat', {
    name: {
      type: String
    },

    links: {
      type: Number,
      default: 0
    }
});
