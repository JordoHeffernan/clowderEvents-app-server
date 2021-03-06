'use strict';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const EventSchema = mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  dateAndTime: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  viewingCode: {
    type: String
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

EventSchema.set('timestamps', true);

EventSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, result) => {
    delete result.__v;
    delete result._id;
  }
});

const Event = mongoose.model('Event', EventSchema);

module.exports = { Event };

