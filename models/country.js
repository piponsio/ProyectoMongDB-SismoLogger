const mongoose = require('mongoose');

const countrySchema = mongoose.Schema({
    id: {
        type: Number,
        index: { unique: true }
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point',
        required: true,
        unique: true
      },
      coordinates: {
        type: [Number],
        default: [0,0],
        required: true,
        unique: true
      },
    },
    country: String,
    iso: String,
    countryaff: String,
    aff_iso: String

});

module.exports = mongoose.model('country', countrySchema);
