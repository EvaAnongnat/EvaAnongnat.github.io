const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  activity: { type: String, minlength: [3, 'Activity name should contains at least 3 char'] },
  date: { type: Date },
  duration: { type: String, min: [0, 'Duration must be at least 0'] },
  kcal: { type: Number, min: [0, 'Calories must be at least 0'] },
  distance: { type: String }, min: [0, 'Distance must be at least 0']
});

const RecordModel = mongoose.model('Record', recordSchema, 'records');

module.exports = RecordModel;
